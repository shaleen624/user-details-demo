import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSummaryComponent } from './user-summary.component';
import { UserDetails } from '../../model/user-model';
import { Router } from '@angular/router';
import { AnimationService } from '../../../animations/app.animation.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

class MockRouter {
  navigate = jasmine.createSpy('navigate');
}

describe('UserSummaryComponent', () => {
  let component: UserSummaryComponent;
  let fixture: ComponentFixture<UserSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSummaryComponent ],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
      ],
      providers: [
        UserDetails,
        AnimationService,
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

  it('should render "User Summery" as page heading', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('USER SUMMARY');
  }));
});
