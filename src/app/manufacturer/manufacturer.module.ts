import { NgModule } from '@angular/core';
import { ManufacturerTableComponent } from './manufacturer-table/manufacturer-table.component';
import { CommonModule } from '@angular/common';
import { ManufacturerRouting } from './manufacturer.routing';
import { CoreModule } from '../core/core.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    ManufacturerRouting,
    CoreModule,
  ],
  declarations: [
    ManufacturerTableComponent
  ]
})
export class ManufacturerModule {

}
