import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../../../shared/models/User';
import {Rating} from '../../../../../shared/models/Rating';
import {ModalController, NavParams, PopoverController} from '@ionic/angular';
import {UserService} from '../../../../../core/services/user.service';
import {RatingColors} from '../../../../../shared/ui.utils';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-rate-popover',
  templateUrl: './rate-popover.component.html',
  styleUrls: ['./rate-popover.component.scss'],
})
export class RatePopoverComponent implements OnInit {

  public user: User;
  public rating: Rating;
  private isToDriver: boolean;
  @Input() ratingNumber: number ;

  @Output() ratingChange: EventEmitter<number> = new EventEmitter();

  constructor(
      private navParams: NavParams,
      private userService: UserService,
      private popoverController: PopoverController,
      private db: AngularFireDatabase
  ) {
    this.user = this.navParams.data.toUser;
    console.log(this.user);
    this.isToDriver = this.navParams.data.isToDriver;
    this.rating = {
      id: this.db.createPushId(),
      dateTime: new Date().getTime(),
      fromUserId: this.navParams.data.fromUserId,
      rating: null,
      comment: ''
    };
  }

  ngOnInit() {
  }
  rate(index: number) {
    // function used to change the value of our ratingNumber
    // triggered when user, clicks a star to change the ratingNumber
    this.ratingNumber = index;
    this.ratingChange.emit(this.ratingNumber);
  }

  getColor(index: number) {
    /* function to return the color of a star based on what
     index it is. All stars greater than the index are assigned
     a grey color , while those equal or less than the ratingNumber are
     assigned a color depending on the ratingNumber. Using the following criteria:

          1-2 stars: red
          3 stars  : yellow
          4-5 stars: green
    */
    if (this.isAboveRating(index)) {
      return RatingColors.GREY;
    }
    switch (this.ratingNumber) {
      case 1 :
      case 2 :
        return RatingColors.RED;
      case 3:
        return RatingColors.YELLOW;
      case 4:
      case 5:
        return RatingColors.GREEN;
      default:
        return RatingColors.GREY;
    }
  }

  isAboveRating(index: number): boolean {
    // returns whether or not the selected index is above ,the current ratingNumber
    // function is called from the getColor function.
    return index > this.ratingNumber;
  }

  async closeModal() {
    let averageRating = (this.user.averageRating * this.user.numberOfRatings + this.ratingNumber) / (this.user.numberOfRatings + 1);
    this.user.numberOfRatings ++;
    averageRating = Math.round( averageRating * 10 ) / 10;
    this.user.averageRating = averageRating;
    let extraPoints = 5;
    if (this.isToDriver) {
      extraPoints = 10;
    }
    console.log(this.user)
    this.user.points.currentPoints += this.ratingNumber + extraPoints;
    if (!this.user.ratings) {
      this.user.ratings = [];
    }
    this.rating.rating = this.ratingNumber;
    this.user.ratings.push(this.rating);
    this.userService.updateUser(this.user).then(() => {
      const onClosedData = true;
      this.popoverController.dismiss(onClosedData);
    });
  }



}
