import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarManagerRoutingModule } from './car-manager-routing.module';
import { CarManagerComponent } from './car-manager.component';
import { CreateCarComponent } from './create-car/create-car.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CarManagerComponent, CreateCarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    CarManagerRoutingModule
  ]
})
export class CarManagerModule { }
