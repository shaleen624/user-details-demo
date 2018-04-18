import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../../model/user-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent {
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
    public router: Router
  ) { }
  loanModel = this.userDetails.userModel.loan;

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(v) {
    this._tickInterval = Number(v);
  }

}
