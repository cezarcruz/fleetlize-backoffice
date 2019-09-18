import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  //{ path: '', component: AppComponent },
  { path: 'car-model', loadChildren: './car-model/car-model.module#CarModelModule' },
  { path: 'manufacturer', loadChildren: './manufacturer/manufacturer.module#ManufacturerModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
