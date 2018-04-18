import { UserDetails } from './../../model/user-model';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationService } from '../../../animations/app.animation.service';

@Component({
  selector: 'app-user-summary',
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.css']
})
export class UserSummaryComponent implements OnInit {
  animationServiceEventsSubscription: any;
  @HostBinding('@routingAnimation') routingAnimation;
  @HostBinding('style.display') display = 'block';
  constructor(
    public userDetails: UserDetails,
    private animationService: AnimationService
  ) { }
  userModel = this.userDetails.userModel;
  /**
   * Init lifecycle hook.
   */
  ngOnInit() {
    this.routingAnimation = this.animationService.animationDirection();
    this.animationServiceEventsSubscription = this.animationService.emitCurrentDirection.subscribe((direction: any) => {
      this.routingAnimation = direction;
    });
  }
  /**
   * Function used to set the animation state and route to the next page.
   * @param direction - 'forward' or 'backward'.
   * @param nextRoute - URL for the next page.
   */
  navigate(direction: string, nextRoute: string) {
    return this.animationService.routingService(direction, nextRoute);
  }

}
