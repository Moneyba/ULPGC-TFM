import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();
const db = admin.database();
const cors = require('cors')({
    origin: true
});

export const sendNotificationOnRequestSend = functions.database
    .ref('requests/{id}')
    .onCreate((snapshot, context) => {
            const request = snapshot.val();

            const payload: admin.messaging.MessagingPayload = {
                notification: {
                    title: '¡Han solicitado ir en su coche!',
                    body: `El origen del viaje es: ${request.ride.originName} y el destino es: ${request.ride.destinationName}`,
                },
                data: {
                    type: 'request',
                    rideId: request.ride.id
                }
            };

            db.ref(`devices/${request.ride.userId}`).once('value').then(device => {
                return admin.messaging().sendToDevice(device.val().token, payload);
            });
        }
    );

export const sendNotificationOnRequestCancel = functions.database
    .ref('requests/{id}')
    .onDelete((snapshot, context) => {
            const request = snapshot.val();

            const payload: admin.messaging.MessagingPayload = {
                notification: {
                    title: '¡Han cancelado una reserva en su coche!',
                    body: `El origen del viaje es: ${request.ride.originName} y el destino es: ${request.ride.destinationName}`,
                },
                data: {
                    type: 'request',
                    rideId: request.ride.id
                }
            };

            db.ref(`devices/${request.ride.userId}`).once('value').then(device => {
                return admin.messaging().sendToDevice(device.val().token, payload);
            });
        }
    );

export const sendNotificationOnRideCancel = functions.database
    .ref('ride/{id}')
    .onDelete((snapshot, context) => {
            const ride = snapshot.val();

            const payload: admin.messaging.MessagingPayload = {
                notification: {
                    title: '¡Han cancelado el viaje que tenía reservado!',
                    body: `El origen del viaje es: ${ride.originName} y el destino es: ${ride.destinationName}`,
                },
                data: {
                    type: 'request',
                    rideId: ride.id
                }
            };
            ride.seatedUserIds.forEach(userId => {
                db.ref(`devices/${userId}`).once('value').then(device => {
                    return admin.messaging().sendToDevice(device.val().token, payload);
                });
            });

        }
    );

export const sendNotificationOnRequestState = functions.database
    .ref('requests/{id}')
    .onUpdate((snapshot, context) => {
            const request = snapshot.after.val();
            console.log(snapshot);
            const payload: admin.messaging.MessagingPayload = {
                notification: {
                    title: '¡Actualización en el estado de su reserva!',
                    body: `El estado de su reserva es: ${request.state}`,
                },
                data: {
                    type: 'requestState',
                    requestId: context.params.id,
                }
            };

            db.ref(`devices/${request.userId}`).once('value').then(device => {
                return admin.messaging().sendToDevice(device.val().token, payload);
            });
        }
    );

export const sendNotificationOnChatMessage = functions.database
    .ref('chats/{id}/chats/{messageId}')
    .onCreate((snapshot, context) => {
            const message = snapshot.val();

            const payload: admin.messaging.MessagingPayload = {
                notification: {
                    title: '¡Ha recibido un nuevo mensaje!',
                    body: `${message.fromUserName}: ${message.content}`,
                },
                data: {
                    type: 'chatMessage',
                    chatId: context.params.id,
                }
            };

            db.ref(`devices/${message.toUser}`).once('value').then(device => {
                return admin.messaging().sendToDevice(device.val().token, payload);
            });
        }
    );

export const sendNotificationOnRatingSend = functions.database
    .ref('users/{id}/ratings/{ratingId}')
    .onCreate((snapshot, context) => {
            const rating = snapshot.val();

            const payload: admin.messaging.MessagingPayload = {
                notification: {
                    title: '¡Ha recibido una valoración!',
                },
                data: {
                    type: 'rating',
                    userId: context.params.id
                }
            };

            db.ref(`devices/${context.params.id}`).once('value').then(device => {
                return admin.messaging().sendToDevice(device.val().token, payload);
            });
        }
    );


export const createUser = functions.https.onRequest((request: any, response: any) => {
    cors(request, response, async () => {
        const user = request.body;
        console.log(user);
        const properties = {
            phoneNumber: user.phoneNumber,
            disabled: false
        };

        let authResults;
        console.log("ey");
        try {
            console.log("ey");
            authResults = await admin.auth().createUser(properties);
        } catch (e) {
            console.error(e);
            return response.status(500).send('ERROR: El usuario no se ha podido crear');
        }

        user.id = authResults.uid;
        try {
            await db.ref(`users/${authResults.uid}`).set(user);
        } catch (e) {
            console.error(e);
            return response.status(500).send('ERROR: No se ha podido crear el usuario en la base de datos');
        }

        return response.send(authResults);
    });
});

export const deleteUser = functions.https.onRequest((request: any, response: any) => {
    cors(request, response, async () => {
        const userId = request.body.id;

        let authResults;
        try {
            authResults = await admin.auth().deleteUser(userId);
        } catch (e) {
            console.error(e);
            return response.status(500).send('ERROR: El usuario no se ha podido borrar');
        }

        try {
            await db.ref(`users/${userId}`).remove();
        } catch (e) {
            console.error(e);
            return response.status(500).send('ERROR: No se ha podido borrar el usuario en la base de datos');
        }

        return response.send(authResults);
    });
});

