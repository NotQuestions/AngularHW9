import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ModuleTwoComponent} from './module-two/module-two.component';

const routes: Routes = [
  {path: '', component: ModuleTwoComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleTwoRoutingModule { }
