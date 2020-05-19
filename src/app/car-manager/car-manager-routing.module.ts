import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarManagerComponent } from './car-manager.component';
import { CreateCarComponent } from './create-car/create-car.component';

const routes: Routes = [
  { path: '', component: CarManagerComponent },
  { path: 'create', component: CreateCarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarManagerRoutingModule { }
