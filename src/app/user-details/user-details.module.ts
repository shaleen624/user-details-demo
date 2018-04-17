
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../common/modules/shared.module';
import { AngularMaterialModule } from '../common/modules/angular-material.module';
// Services
import { UserDetails } from './model/user-model';
import { UserHttpService } from './services/user-http.service';
// Components
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { OccupationDetailsComponent } from './components/occupation-details/occupation-details.component';
import { LoanDetailsComponent } from './components/loan-details/loan-details.component';
import { UserSummaryComponent } from './components/user-summary/user-summary.component';

const ROUTES: Routes = [
  { path: 'personal', component: PersonalDetailsComponent },
  { path: 'occupation', component: OccupationDetailsComponent },
  { path: 'loan', component: LoanDetailsComponent },
  { path: 'summary', component: UserSummaryComponent }
];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES),
    AngularMaterialModule
  ],
  declarations: [
    PersonalDetailsComponent,
    OccupationDetailsComponent,
    LoanDetailsComponent,
    UserSummaryComponent
  ],
  providers: [
    UserHttpService,
    UserDetails
  ],
})
export class UserDetailsModule { }
