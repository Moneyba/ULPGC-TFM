import LatLngLiteral = google.maps.LatLngLiteral;

export class Ride {
    id?: string;
    originName: string;
    origin: LatLngLiteral;
    destinationName: string;
    destination: LatLngLiteral;
    dateTime: number;
    userId: string;
    numberOfSeats: number;
    seatedUserIds: string[];
    isFinished?: boolean;
}
