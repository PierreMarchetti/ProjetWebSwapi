import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanetsListComponent } from './planets-list/planets-list.component';
import { PlanetComponent } from './planet/planet.component';
import { SearchFormComponent } from './search-form/search-form.component';



const routes: Routes = [
  {path: 'planets', component: PlanetsListComponent},
  {path: 'planet/:id', component: PlanetComponent},
  {path: 'search', component: SearchFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
