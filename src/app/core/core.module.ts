import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  declarations: [
    NavigationBarComponent,
  ],
  exports: [
    NavigationBarComponent,
  ]
})
export class CoreModule {

}
