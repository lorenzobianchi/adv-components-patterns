import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewToggleComponent } from './newToggle.component'
import { SharedModule } from '../irrelevant-implementation-details/shared.module';
import { TogglerDirective } from './toggler.directive'

@NgModule({
  declarations: [
    NewToggleComponent,
    TogglerDirective
  ],
  imports: [ CommonModule, SharedModule ],
  exports: [
    NewToggleComponent,
    TogglerDirective
  ],
})
export class NewToggleModule {}
