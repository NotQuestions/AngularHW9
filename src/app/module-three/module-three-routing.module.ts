import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ModuleThreeComponent} from './module-three/module-three.component';

const routes: Routes = [
  {path: '', component: ModuleThreeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleThreeRoutingModule { }
