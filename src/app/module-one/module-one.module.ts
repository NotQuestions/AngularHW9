import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleOneRoutingModule } from './module-one-routing.module';
import { ModuleOneComponent } from './module-one/module-one.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ModuleOneComponent],
  exports: [
    ModuleOneComponent
  ],
  imports: [
    CommonModule,
    ModuleOneRoutingModule,
    ReactiveFormsModule
  ]
})
export class ModuleOneModule { }
