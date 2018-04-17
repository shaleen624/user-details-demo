import { UserHttpService } from './../../services/user-http.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/switchMap';
import { FormControl } from '@angular/forms';
import { UserDetails } from '../../model/user-model';
import { Router } from '@angular/router';
import { slideInOutAnimation } from '../../../animations/slide-in-out.animation';


@Component({
  selector: 'app-occupation-details',
  templateUrl: './occupation-details.component.html',
  styleUrls: ['./occupation-details.component.css'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})
export class OccupationDetailsComponent implements OnInit {
  private searchField: FormControl;
  addressData$: Observable<any>;
  private searchTerms = new Subject<string>();
  showDropDown = true;
  constructor(
    private userHttpService: UserHttpService,
    public userDetails: UserDetails,
    public router: Router
  ) { }
  userModel = this.userDetails.userModel;

  ngOnInit(): void {
    this.addressData$ = this.userHttpService.searchHeroes("str");
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
    this.getSuggestions(term);
  }

  getSuggestions(term) {
    this.showDropDown = true;
    this.addressData$ = this.userHttpService.searchHeroes(term);
    // this.addressData$ = this.searchTerms.pipe(
    //   // wait 300ms after each keystroke before considering the term
    //   debounceTime(300),

    //   // ignore new term if same as previous term
    //  // distinctUntilChanged(),

    //   // switch to new search observable each time the term changes.
    //   switchMap(
    //     term => {
    //       console.log("in switchmap");
    //       return this.userHttpService.searchHeroes(term)
    //     }
    //     ),
    // );

  }

}
