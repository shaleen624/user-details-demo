import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    // NoopAnimationsModule,
    NgxMyDatePickerModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    // NoopAnimationsModule,
    NgxMyDatePickerModule
  ]
})
export class SharedModule { }
