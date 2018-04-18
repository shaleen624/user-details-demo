import { Address } from './../../model/address-model';
import { UserHttpService } from './../../services/user-http.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserDetails } from '../../model/user-model';
import { Router } from '@angular/router';
import { slideInOutAnimation } from '../../../animations/slide-in-out.animation';
import { filter } from 'lodash';


@Component({
  selector: 'app-occupation-details',
  templateUrl: './occupation-details.component.html',
  styleUrls: ['./occupation-details.component.css'],
  providers: [Address],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})
export class OccupationDetailsComponent {
  addressData = [];
  showSuggestion = false;
  constructor(
    public userDetails: UserDetails,
    public addressModel: Address,
    public router: Router
  ) { }
  userModel = this.userDetails.userModel;
  /**
   * Function used to update the string date field in calender input.
   * @param term - user typed value in the input.
   */
  getSuggestion(term: string): void {
    this.addressData = filter(this.addressModel.addresses,
      function(o) { return o.address.toLowerCase().includes(term.toLowerCase()); });
  }

}
