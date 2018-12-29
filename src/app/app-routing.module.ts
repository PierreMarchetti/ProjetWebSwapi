import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanetsListComponent } from './planets-list/planets-list.component';
import { PlanetComponent } from './planet/planet.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharacterComponent } from './character/character.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchFormComponent } from './search-form/search-form.component';



const routes: Routes = [
  {path: 'planets', component: PlanetsListComponent},
  {path: 'planets/:id', component: PlanetComponent},
  {path: 'characters', component: CharactersListComponent},
  {path: 'characters/:id', component: CharacterComponent},
  {path: 'search', component: SearchFormComponent},
  {path: '', component: SearchFormComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
