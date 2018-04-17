import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSummaryComponent } from './user-summary.component';
import { UserDetails } from '../model/user-model';
import { Router } from '@angular/router';

class MockRouter {
  navigate = jasmine.createSpy('navigate');
}

describe('UserSummaryComponent', () => {
  let component: UserSummaryComponent;
  let fixture: ComponentFixture<UserSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSummaryComponent ],
      providers: [
        UserDetails,
        {provide: Router, useClass: MockRouter}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
