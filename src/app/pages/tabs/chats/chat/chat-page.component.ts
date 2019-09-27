import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {User} from '../../../../shared/models/User';
import {Chat} from '../../../../shared/models/Chat';
import {Ride} from '../../../../shared/models/Ride';
import {Message} from '../../../../shared/models/Message';
import {ChatService} from '../../../../core/services/chat.service';
import {UserService} from '../../../../core/services/user.service';
import {RideService} from '../../../../core/services/ride.service';
import {IonContent, PopoverController} from '@ionic/angular';
import {ProfilePopoverComponent} from '../../profile/profile-popover/profile-popover.component';
import {ChatOptionsComponent} from './chat-options/chat-options.component';

@Component({
    selector: 'app-chat',
    templateUrl: './chat-page.component.html',
    styleUrls: ['./chat-page.component.scss'],
})
export class ChatPage implements OnInit {
    public chat: Chat;
    public currentUser: User;
    public otherUser: User;
    public ride: Ride;
    public isOtherUserBlocked: boolean;
    public isCurrentUserBlocked: boolean;

    public messages: Message[] = [];
    public msg: string;
    @ViewChild(IonContent) content: IonContent;

    private chatId: string;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private chatService: ChatService,
                private userService: UserService,
                private rideService: RideService,
                private popoverController: PopoverController
    ) {
        this.currentUser = this.userService.user.getValue();


        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.chatId = this.router.getCurrentNavigation().extras.state.chatId;
                this.getChat(this.chatId);
            }
        });

    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.scrollBottom();
        this.getChat(this.chatId);
    }

    public getChat(chatId: string): void {
        this.chatService.getChat(chatId).subscribe((chat: Chat) => {
            this.chat = chat;
            this.messages = this.getArrayFromObject(chat.messages);
            this.getRide();
            this.getOtherUser();

        });
    }

    private getRide(): void {
        this.rideService.getRide(this.chat.rideId).subscribe(ride => this.ride = ride);
    }

    public getArrayFromObject(object): any[] {
        return Object.keys(object || {}).map(key => object[key]);
    }

    private getCurrentBlockList(): void {
        this.userService.getBlockList(this.currentUser.id).subscribe(blockList => {
            blockList.forEach(userId => {
                if (userId === this.otherUser.id) {
                    this.isOtherUserBlocked = true;
                }
            });
        });
    }

    private getOtherUserBlockList(): void {
        this.userService.getBlockList(this.otherUser.id).subscribe(blockList => {
            blockList.forEach(userId => {
                if (userId === this.currentUser.id) {
                    this.isCurrentUserBlocked = true;
                }
            });
        });
    }


    public sendMessage(): void {
        if (this.msg) {
            const message: Message = {
                content: this.msg,
                date: new Date(),
                fromUserId: this.currentUser.id,
                fromUserName: this.currentUser.name,
                toUserId: this.getReceiver()
            };

            if (!this.isCurrentUserBlocked && !this.isOtherUserBlocked) {
                this.chatService.sendMessage(message, this.chat.id).then(() => this.getChat(this.chat.id));
            } else {
                console.log('blocked');
            }
            this.msg = '';
            this.scrollBottom();
        }


    }

    public scrollBottom() {
        this.content.scrollToBottom(300);
    }

    private getReceiver(): string {
        return this.currentUser.id === this.chat.passengerUser ? this.chat.driverUser : this.chat.passengerUser;
    }

    public goToRidePlanPage(): void {
        const navigationExtras: NavigationExtras = {
            state: {
                rideId: this.chat.rideId
            }
        };
        this.router.navigate(['ride-plan'], navigationExtras);
    }

    public getOtherUser(): void {
        if (this.chat.passengerUser === this.currentUser.id) {
            this.userService.getUser(this.chat.driverUser).subscribe(user => {
                this.otherUser = user;
                this.getOtherUserBlockList();
                this.getCurrentBlockList();
            });
        } else {
            this.userService.getUser(this.chat.passengerUser).subscribe(user => {
                this.otherUser = user;
                this.getOtherUserBlockList();
                this.getCurrentBlockList();
            });
        }
    }

    public gotoUserProfile(userId: string): void {
        const navigationExtras: NavigationExtras = {
            state: {
                userId
            }
        };
        this.router.navigate(['public-profile'], navigationExtras);
    }

    public getClasses(message): any {
        return {
            incoming: message.fromUserId !== this.currentUser.id,
            outgoing: message.fromUserId === this.currentUser.id,
        };
    }

    public goToDriverDetailsPage(): void {
        const navigationExtras: NavigationExtras = {
            state: {
                userId: this.otherUser.id
            }
        };
        this.router.navigate(['public-profile'], navigationExtras);
    }

    public blockUser(userId: string): void {
        this.isOtherUserBlocked = true;
        this.userService.blockUser(userId);
    }

    public unblockUser(userId: string): void {
        this.isOtherUserBlocked = false;
        this.userService.unBlockUser(userId);
    }

    public async presentPopover(event: any) {
        const popover = await this.popoverController.create({
            component: ChatOptionsComponent,
            event,
            componentProps: {
                chatId: this.chat.id,
                otherUserId: this.otherUser.id,
                isOtherUserBlocked: this.isOtherUserBlocked
            }

        });

        popover.onDidDismiss().then((dataReturned) => {
            if (dataReturned !== null) {
                this.isOtherUserBlocked = dataReturned.data;
                // alert('Modal Sent Data :'+ dataReturned);
            }
        });
        return await popover.present().then();
    }

}
