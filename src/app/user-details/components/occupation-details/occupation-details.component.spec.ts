import { UserHttpService } from './../../services/user-http.service';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupationDetailsComponent } from './occupation-details.component';
import { UserDetails } from '../../model/user-model';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
class MockRouter {
  navigate = jasmine.createSpy('navigate');
}
describe('OccupationDetailsComponent', () => {
  let component: OccupationDetailsComponent;
  let fixture: ComponentFixture<OccupationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupationDetailsComponent ],
      imports: [
        FormsModule,
        HttpClientModule,
        HttpClientTestingModule,
        BrowserAnimationsModule
      ],
      providers: [
        UserDetails,
        {provide: Router, useClass: MockRouter},
        UserHttpService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});