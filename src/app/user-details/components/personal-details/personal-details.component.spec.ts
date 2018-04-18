import { AnimationService } from './../../../animations/app.animation.service';
import { UserHttpService } from './../../services/user-http.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailsComponent } from './personal-details.component';
import { FormsModule } from '@angular/forms';
import { NgxMyDatePickerModule, IMyDateModel, IMyDate } from 'ngx-mydatepicker';
import { UserDetails } from '../../model/user-model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MAT_CHECKBOX_REQUIRED_VALIDATOR } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
class MockRouter {
  navigate = jasmine.createSpy('navigate');
}
describe('PersonalDetailsComponent', () => {
  let component: PersonalDetailsComponent;
  let fixture: ComponentFixture<PersonalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalDetailsComponent],
      imports: [
        FormsModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        NgxMyDatePickerModule.forRoot(),
      ],
      providers: [
        UserDetails,
        UserHttpService,
        AnimationService,
        { provide: Router, useClass: MockRouter }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render "Personal details" as page heading', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('PERSONAL DETAILS');
  }));

  it('should set the date field', () => {
    expect(component).toBeTruthy();
    component.setDateField('10/09/1995');
    expect(component.userModel.personal['dob'].date.year).toEqual('1995');
    expect(component.userModel.personal['dob'].date.month).toEqual('9');
    expect(component.userModel.personal['dob'].date.day).toEqual('10');
  });

  it('should update date field', () => {
    class DateChange implements IMyDateModel {
      date: IMyDate;
      jsdate: Date;
      formatted: string;
      epoc: number;
      constructor(formatted) {
        this.formatted = formatted;
      }
    }
    const event = new DateChange('10/04/1895');
    component.onDateChanged(event);
    expect(component.userModel.personal['dob']).toEqual('10/04/1895');
    expect(component.validDate).toBeTruthy();
  });

});
