import { Routes, RouterModule } from "@angular/router";
import { AddCarModelComponent } from './add-car-model/add-car-model.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: 'new', component: AddCarModelComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CarModelRouting {

}
