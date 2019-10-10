import { Component, OnInit } from '@angular/core';
import {AlertController, NavParams, PopoverController} from '@ionic/angular';
import {ChatService} from '../../../../../core/services/chat.service';
import {UserService} from '../../../../../core/services/user.service';
import {Chat} from '../../../../../shared/models/Chat';
import {Router} from '@angular/router';

@Component({
  selector: 'app-chat-options',
  templateUrl: './chat-options.component.html',
  styleUrls: ['./chat-options.component.scss'],
})
export class ChatOptionsComponent implements OnInit {
  private chatId: string;
  private otherUserId: string;
  public isOtherUserBlocked: boolean

  constructor(private router: Router,
              private alertController: AlertController,
              private chatService: ChatService,
              private userService: UserService,
              private navParams: NavParams,
              private popoverController: PopoverController) {
    this.chatId = this.navParams.data.chatId;
    this.otherUserId = this.navParams.data.otherUserId;
    this.isOtherUserBlocked = this.navParams.data.isOtherUserBlocked;
  }

  ngOnInit() {}

  public   async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Cancel Ride',
      message: 'Are you sure you want to delete this chat?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log(this.chatId);
            this.popoverController.dismiss();
            this.router.navigateByUrl('tabs/tabs/chats');
            this.chatService.deleteChat(this.chatId);
          }
        }
      ]
    });

    await alert.present();
  }

  public blockUser(): void {
    this.isOtherUserBlocked = true;
    this.popoverController.dismiss(this.isOtherUserBlocked);
    this.userService.blockUser(this.otherUserId);
  }

  public unblockUser(): void {
    this.isOtherUserBlocked = false;
    this.popoverController.dismiss(this.isOtherUserBlocked);
    this.userService.unBlockUser(this.otherUserId);
  }

}
