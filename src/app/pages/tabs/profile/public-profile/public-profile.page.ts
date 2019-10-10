import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {User} from '../../../../shared/models/User';
import {UserService} from '../../../../core/services/user.service';
import {Rating} from '../../../../shared/models/Rating';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.page.html',
  styleUrls: ['./public-profile.page.scss'],
})
export class PublicProfilePage implements OnInit {
  public user: User;
  private userId: string;
  public ratings: any[];
  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.userId = this.router.getCurrentNavigation().extras.state.userId;
        this.getUser();
      }
    });
  }

  ngOnInit() {
  }

  private getUser(): void {
    this.userService.getUser(this.userId).subscribe(user => {
          this.user = user;
          this.getFromUsers();
    });
  }

  public goToUserDetailsPage(userId: string): void {
    const navigationExtras: NavigationExtras = {
      state: {
        userId
      }
    };
    this.router.navigate(['public-profile'], navigationExtras);
  }

  private getFromUsers(): void {
    this.ratings = this.user.ratings;
    this.ratings = this.sortByDate(this.ratings);
    if (this.user.ratings) {
      this.ratings.forEach((rating) => {
        this.userService.getUser(rating.fromUserId).subscribe(user => rating.fromUser = user);
      });
    }
  }

  public sortByDate(array: any[]): any[] {
    return array.sort((a, b) => {
      return b.dateTime - a.dateTime;

    });

  }

}
