import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CarManagerRoutingModule } from './car-manager-routing.module';
import { CarManagerComponent } from './car-manager.component';
import { CreateCarComponent } from './create-car/create-car.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CarManagerComponent, CreateCarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    CarManagerRoutingModule,
  ]
})
export class CarManagerModule { }
