import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManufacturerTableComponent } from './manufacturer-table/manufacturer-table.component';

const routes: Routes = [
    { path: 'list', component: ManufacturerTableComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class ManufacturerRouting {

}