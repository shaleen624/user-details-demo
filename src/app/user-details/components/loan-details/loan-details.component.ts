import { Component, OnInit, HostBinding } from '@angular/core';
import { UserDetails } from '../../model/user-model';
import { Router } from '@angular/router';
import { routeAnimation } from '../../../animations/slide-in-out.animation';
import { AnimationService } from '../../../animations/app.animation.service';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css'],
  animations: [routeAnimation],
})
export class LoanDetailsComponent implements OnInit {
  animationServiceEventsSubscription: any;
  @HostBinding('@routingAnimation') routingAnimation;
  @HostBinding('style.display') display = 'block';
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 5000000;
  min = 10000;
  showTicks = false;
  step = 1000;
  thumbLabel = false;
  valueLoanAmt = 10000;
  valueEmi = 10000;
  vertical = false;
  private _tickInterval = 1;

  constructor(
    public userDetails: UserDetails,
    public router: Router,
    private animationService: AnimationService
  ) { }
  loanModel = this.userDetails.userModel.loan;
  /**
   * Init lifecycle hook.
   */
  ngOnInit() {
    this.routingAnimation = this.animationService.animationDirection();
    this.animationServiceEventsSubscription = this.animationService.emitCurrentDirection.subscribe((direction: any) => {
      this.routingAnimation = direction;
    });
  }
  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(v) {
    this._tickInterval = Number(v);
  }

  navigate(direction: string, nextRoute: string) {
    return this.animationService.routingService(direction, nextRoute);
  }

}
