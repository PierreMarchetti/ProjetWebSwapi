import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanetComponent } from './planet/planet.component';


const routes: Routes = [
  {path: 'planet', component: PlanetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
