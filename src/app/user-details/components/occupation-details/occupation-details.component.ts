import { Address } from './../../model/address-model';
import { UserHttpService } from './../../services/user-http.service';
import { Component, OnInit, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserDetails } from '../../model/user-model';
import { Router } from '@angular/router';
import { routeAnimation } from '../../../animations/slide-in-out.animation';
import { filter } from 'lodash';
import { AnimationService } from '../../../animations/app.animation.service';


@Component({
  selector: 'app-occupation-details',
  templateUrl: './occupation-details.component.html',
  styleUrls: ['./occupation-details.component.css'],
  providers: [Address],
  animations: [routeAnimation],
})
export class OccupationDetailsComponent implements OnInit {
  animationServiceEventsSubscription: any;
  @HostBinding('@routingAnimation') routingAnimation;
  @HostBinding('style.display') display = 'block';
  addressData = [];
  showSuggestion = false;
  constructor(
    public userDetails: UserDetails,
    public addressModel: Address,
    public router: Router,
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
   * Function used to update the string date field in calender input.
   * @param term - user typed value in the input.
   */
  getSuggestion(term: string): void {
    this.addressData = filter(this.addressModel.addresses,
      function (o) { return o.address.toLowerCase().includes(term.toLowerCase()); });
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
