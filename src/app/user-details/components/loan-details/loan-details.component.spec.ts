import { AnimationService } from './../../../animations/app.animation.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDetailsComponent } from './loan-details.component';
import { AngularMaterialModule } from '../../../common/modules/angular-material.module';
import { FormsModule } from '@angular/forms';
import { UserDetails } from '../../model/user-model';
class MockRouter {
  navigate = jasmine.createSpy('navigate');
}
describe('LoanDetailsComponent', () => {
  let component: LoanDetailsComponent;
  let fixture: ComponentFixture<LoanDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanDetailsComponent ],
      imports: [
        FormsModule,
        AngularMaterialModule,
        RouterModule,
        BrowserAnimationsModule
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
    fixture = TestBed.createComponent(LoanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render "Loan Details" as page heading', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('LOAN DETAILS');
  }));
});
