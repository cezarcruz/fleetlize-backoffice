import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCarModelComponent } from './add-car-model/add-car-model.component';
import { CarModelRouting } from './car-model.routing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AddCarModelComponent
  ],
  imports: [
    CommonModule,
    CarModelRouting,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ]
})
export class CarModelModule { }
