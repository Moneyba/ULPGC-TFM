import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import {ChatService} from '../../../core/services/chat.service';
import {User} from '../../../shared/models/User';
import {Chat} from '../../../shared/models/Chat';
import {NavigationExtras, Router} from '@angular/router';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {UserService} from '../../../core/services/user.service';
import {RequestService} from '../../../core/services/request.service';
import {RideService} from '../../../core/services/ride.service';

@Component({
    selector: 'app-chats',
    templateUrl: './chats-page.component.html',
    styleUrls: ['./chats-page.component.scss'],
})
export class ChatsPage implements OnInit {
    public currentSegment = 'chats';
    public chats = [];
    public notifications = [];
    private chat$: Observable<any[]>;
    private currentUser: User;
    public user: User;


    constructor(private authService: AuthService,
                private chatService: ChatService,
                private router: Router,
                private userService: UserService,
                private requestService: RequestService,
                private rideService: RideService
    ) {
        this.currentUser = this.userService.user.getValue();
    }

    ngOnInit() {
        this.getChats();
        this.getNotifications();
    }

    segmentChanged(ev: any) {
        this.currentSegment = ev.detail.value;
    }

    public getChats() {

        const observablesToSubscribe = [
            this.chatService.getChatsByUserId(this.currentUser.id, 'passengerUser'),
            this.chatService.getChatsByUserId(this.currentUser.id, 'driverUser')
        ];

        this.chat$ = combineLatest(observablesToSubscribe).pipe(
            map(([passengerChats, driverChats]) => {
                return passengerChats.concat(driverChats);
            })
        );

        this.chat$.subscribe(chats => {
            console.log(chats);
            this.chats = chats;
            this.chats.forEach((chat) => {
                if (this.currentUser.id === chat.driverUser) {
                    this.userService.getUser(chat.passengerUser).subscribe(passengerUser => chat.otherUser = passengerUser);
                } else {
                    this.userService.getUser(chat.driverUser).subscribe(driverUser => chat.otherUser = driverUser);
                }

                this.rideService.getRide(chat.rideId).subscribe(ride => chat.ride = ride);
            });
        });
    }

    public goToChatPage(chat: Chat): void {
        const navigationExtras: NavigationExtras = {
            state: {
                chatId: chat.id
            }
        };
        this.router.navigate(['chat'], navigationExtras);
    }

    public getNotifications(): void {
        this.requestService.getRequestsByReceiverId(this.currentUser.id).subscribe(requests => {
            this.notifications = requests;
        }
       );
    }

    public goToChatNotification(notification: Request): void {
        const navigationExtras: NavigationExtras = {
            state: {
                notification
            }
        };
        this.router.navigate(['notification'], navigationExtras);
    }

}
