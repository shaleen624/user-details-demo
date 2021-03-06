import { UserHttpService } from './../../services/user-http.service';
import { UserDetails } from './../../model/user-model';
import { Component, OnInit, ViewChild, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { INgxMyDpOptions, IMyDateModel, IMyInputFieldChanged, NgxMyDatePickerDirective } from 'ngx-mydatepicker';
import { AppConstants } from '../../../utilities/app-constants';
import { AnimationService } from '../../../animations/app.animation.service';
import { routeAnimation } from '../../../animations/slide-in-out.animation';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css'],
  animations: [routeAnimation],
})
export class PersonalDetailsComponent implements OnInit {
  animationServiceEventsSubscription: any;
  @HostBinding('@routingAnimation') routingAnimation;
  @HostBinding('style.display') display = 'block';
  @ViewChild('dp') ngxdp: NgxMyDatePickerDirective;
  inputText: string;
  validDate: boolean;
  constants = AppConstants;
  constructor(
    public userDetails: UserDetails,
    private userHttpService: UserHttpService,
    private animationService: AnimationService
  ) { }
  userModel = this.userDetails.userModel;
  myDatePickerOptions: INgxMyDpOptions = {
    // add other options here.
    dateFormat: 'dd/mm/yyyy',
  };
  /**
   * Init lifecycle hook.
   */
  ngOnInit() {
    this.routingAnimation = this.animationService.animationDirection();
    this.animationServiceEventsSubscription = this.animationService.emitCurrentDirection.subscribe((direction: any) => {
      this.routingAnimation = direction;
    });
    this.userHttpService.getUserData().subscribe((userData) => {
      this.userModel.personal = userData;
      this.setDateField(userData.dob);
    });
  }
  /**
   * Function used to update the string date field in calender input.
   * @param dateString - name of the operation that failed
   */
  setDateField(dateString) {
    const dateValues = dateString.split('/');
    this.userModel.personal['dob'] = {
      date: {
        year: this.removeLeadingZeros(dateValues[2]),
        month: this.removeLeadingZeros(dateValues[1]),
        day: this.removeLeadingZeros(dateValues[0])
      }
    };
  }
  /**
   * Remove leading zeros for datepicker component.
   */
  removeLeadingZeros(str) {
    return str.replace(/^(0+)/g, '');
  }
  /**
   * Function triggered on date change.
   * @param event - date change event object.
   */
  onDateChanged(event: IMyDateModel): void {
    if (event.formatted !== '') {
      this.validDate = true;
      this.userModel.personal['dob'] = event.formatted;
    }
  }
  /**
   * Function triggered on date input field change.
   * @param event - input field change event object.
   */
  onInputFieldChanged(event: IMyInputFieldChanged): void {
    this.validDate = event.valid;
    this.userModel.personal['dob'] = event.value;
  }
  /**
   * Function used to set the animation state and route to the next page.
   */
  onNextClick() {
    return this.animationService.routingService('forward', 'user/occupation');
  }

}
