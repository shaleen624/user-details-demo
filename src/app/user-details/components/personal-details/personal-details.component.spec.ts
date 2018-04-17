import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailsComponent } from './personal-details.component';
import { FormsModule } from '@angular/forms';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { UserDetails } from '../model/user-model';
import { Router } from '@angular/router';
class MockRouter {
  navigate = jasmine.createSpy('navigate');
}
describe('PersonalDetailsComponent', () => {
  let component: PersonalDetailsComponent;
  let fixture: ComponentFixture<PersonalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalDetailsComponent ], 
      imports: [
        FormsModule,
       NgxMyDatePickerModule.forRoot(),
      ],
      providers: [
        UserDetails,
        {provide: Router, useClass: MockRouter}
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
});
