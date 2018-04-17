import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './common/modules/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';

export const appRoutes: Routes = [
  {path: 'user', loadChildren: './user-details/user-details.module#UserDetailsModule'},
  {
    path: '',
    redirectTo: '/user/personal',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgxMyDatePickerModule.forRoot(),
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
