import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'module-one', loadChildren: () => import('./module-one/module-one.module').then(m => m.ModuleOneModule)},
  {path: 'module-two', loadChildren: () => import('./module-two/module-two.module').then(m => m.ModuleTwoModule)},
  {path: 'module-three', loadChildren: () => import('./module-three/module-three.module').then(m => m.ModuleThreeModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
