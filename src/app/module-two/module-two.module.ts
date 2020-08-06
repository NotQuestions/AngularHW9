import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleTwoRoutingModule } from './module-two-routing.module';
import { ModuleTwoComponent } from './module-two/module-two.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ModuleTwoComponent],
  imports: [
    CommonModule,
    ModuleTwoRoutingModule,
    ReactiveFormsModule
  ]
})
export class ModuleTwoModule { }
