import { UserDetails } from './../../model/user-model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-summary',
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.css']
})
export class UserSummaryComponent {

  constructor(
    public userDetails: UserDetails,
    public router: Router
  ) { }
  userModel = this.userDetails.userModel;

}
