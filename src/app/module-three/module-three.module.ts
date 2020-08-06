import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleThreeRoutingModule } from './module-three-routing.module';
import { ModuleThreeComponent } from './module-three/module-three.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ ModuleThreeComponent],
  imports: [
    CommonModule,
    ModuleThreeRoutingModule,
    ReactiveFormsModule
  ]
})
export class ModuleThreeModule { }
