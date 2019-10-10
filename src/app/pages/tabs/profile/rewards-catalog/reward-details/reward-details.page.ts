import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {RewardProduct} from '../../../../../shared/models/RewardProduct';
import {User} from '../../../../../shared/models/User';
import {UserService} from '../../../../../core/services/user.service';
import {RewardRequestService} from '../../../../../core/services/reward-request.service';
import {RewardRequest} from '../../../../../shared/models/RewardRequest';
import {State} from '../../../../../shared/ui.utils';
import {Request} from '../../../../../shared/models/Request';
import {RewardService} from '../../../../../core/services/reward.service';

@Component({
  selector: 'app-reward-details',
  templateUrl: './reward-details.page.html',
  styleUrls: ['./reward-details.page.scss'],
})
export class RewardDetailsPage implements OnInit {
  public reward: RewardProduct;
  public requests: any[];
  private currentUser: User;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private rewardService: RewardService,
              private rewardRequestService: RewardRequestService) {
    this.route.queryParams.subscribe(params => {

      if (this.router.getCurrentNavigation().extras.state) {
        this.reward = this.router.getCurrentNavigation().extras.state.reward;
        this.currentUser = this.router.getCurrentNavigation().extras.state.user;
      }
    });
  }

  ngOnInit() {
    this.getRequests();
  }

  public exchange(): void {
    this.currentUser.points.currentPoints -= this.reward.points;
    this.currentUser.points.blockedPoints = this.reward.points;
    this.createRequest();
    this.userService.updateUser(this.currentUser);
  }

  private createRequest(): void {
    const request: RewardRequest = {
      dateTime: new Date().getTime(),
      rewardId: this.reward.id,
      userId: this.currentUser.id,
      state: State.pending
    };
    this.rewardRequestService.createRequest(request).then(() =>
        this.router.navigate(['rewards-catalog'])
    );
  }

  public getRequests(): void {
    this.rewardRequestService.getRequestsByRewardId(this.reward.id).subscribe(requests => {
          this.requests = requests;
          requests.forEach((request, index) => this.getUser(request.userId, index));
        }
    );
  }

  public getUser(userId, index): void {
    this.userService.getUser(userId).subscribe(user => this.requests[index].user = user);
  }

  public goToUserDetailsPage(userId: string): void {
    const navigationExtras: NavigationExtras = {
      state: {
        userId
      }
    };
    this.router.navigate(['public-profile'], navigationExtras);
  }

  public acceptRequest(request: RewardRequest, user: User): void {
    if (this.reward.stock > 0) {
      request.state = State.accepted;
      this.reward.stock--;
      user.points.currentPoints -= this.reward.points;
      user.points.exchangedPoints += this.reward.points;
      user.points.blockedPoints -= this.reward.points;
      this.rewardRequestService.updateRequest(request);
      this.rewardService.updateReward(this.reward);
      this.userService.updateUser(user).then(() => this.getRequests());

    }
  }

  public refuseRequest(request: RewardRequest): void {
    request.state = State.refused;
    this.rewardRequestService.updateRequest(request);
  }

}
