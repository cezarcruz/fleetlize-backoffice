import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCarModelComponent } from './add-car-model/add-car-model.component';
import { CarModelRouting } from './car-model.routing';

@NgModule({
  declarations: [
    AddCarModelComponent
  ],
  imports: [
    CommonModule,
    CarModelRouting,
  ]
})
export class CarModelModule { }
