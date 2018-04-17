import { UserHttpService } from './../../services/user-http.service';
import { UserDetails } from './../../model/user-model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { INgxMyDpOptions, IMyDateModel, IMyInputFieldChanged, NgxMyDatePickerDirective } from 'ngx-mydatepicker';
import { AppConstants } from '../../../utilities/app-constants';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  @ViewChild('dp') ngxdp: NgxMyDatePickerDirective;
  inputText: string;
  validDate: boolean;
  constants = AppConstants;
  constructor(
    public userDetails: UserDetails,
    private router: Router,
    private userHttpService: UserHttpService
  ) { }
  personalModel = this.userDetails.userModel.personal;
  myDatePickerOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: 'dd/mm/yyyy',
  };
  ngOnInit() {
    this.userHttpService.getUserData().subscribe((userData) => {
      this.personalModel = userData;
      this.setDateField(userData.dob);
    });
  }

  setDateField(dateString) {
    const dateValues = dateString.split('/');
    this.personalModel['dob'] = {
      date: {
        year: this.removeLeadingZeros(dateValues[2]),
        month: this.removeLeadingZeros(dateValues[1]),
        day: this.removeLeadingZeros(dateValues[0])
      }
    };
  }

  removeLeadingZeros(str) {
    return str.replace(/^(0+)/g, '');
  }

  onDateChanged(event: IMyDateModel): void {
    if (event.formatted !== '') {
      this.validDate = true;
      this.personalModel['dob'] = event.formatted;
    }
  }

  onInputFieldChanged(event: IMyInputFieldChanged): void {
    this.validDate = event.valid;
    this.personalModel['dob'] = event.value;
  }

  onNextClick() {
    this.router.navigate(['user/occupation']);
  }

}
