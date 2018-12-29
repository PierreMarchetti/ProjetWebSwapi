import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { PlanetComponent } from './planet/planet.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharacterComponent } from './character/character.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlanetsListComponent,
    PlanetComponent,
    CharactersListComponent,
    CharacterComponent,
    SearchFormComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
