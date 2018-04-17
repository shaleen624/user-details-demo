import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule, MatCardModule, MatSliderModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatCardModule,
    MatSliderModule
  ],
  exports: [
    CommonModule,
    MatDatepickerModule,
    MatCardModule,
    MatSliderModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
