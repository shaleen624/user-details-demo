import { Address } from './../../model/address-model';
import { UserHttpService } from './../../services/user-http.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
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
  constructor(
    public userDetails: UserDetails,
    public addressModel: Address,
    public router: Router
  ) { }
  userModel = this.userDetails.userModel;


  search(term: string): void {
    this.addressData = filter(this.addressModel.addresses,
      function(o) { return o.address.toLowerCase().includes(term.toLowerCase()); });
  }

}
