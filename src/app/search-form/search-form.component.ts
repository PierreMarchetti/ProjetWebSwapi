import { Component, OnInit } from '@angular/core';
import {Planet} from '../models/planet';
import {Planets} from '../models/planets';
import {Character} from '../models/character';
import {Characters} from '../models/characters';
import {PlanetsService} from '../services/planets.service';
import {CharactersService} from '../services/characters.service';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  typeSearch:string;
  name: string;
  planets: Planets;
  characters: Characters;
  url:string;

  constructor(private planetsService:PlanetsService, private charactersService:CharactersService, private route:ActivatedRoute) {

  }

  ngOnInit() {
  }

  search() {
    if(this.typeSearch=="planet") {
      this.characters = null;
      this.url="https://swapi.co/api/planets/?search="+this.name;
      this.planetsService.getPlanets(this.url).subscribe(data=>this.planets=data);
    }
    else {
      this.url="https://swapi.co/api/people/?search="+this.name;
      this.planets = null;
      this.charactersService.getCharacters(this.url).subscribe(data=>this.characters=data);
    }
  }

  getCharacterId(character:Character) {
    var urlArray = character.url.split('/');
    return 'characters/' + urlArray[urlArray.length-2];
  }

  getPlanetId(planet:Planet) {
    var urlArray = planet.url.split('/');
    return 'planets/' + urlArray[urlArray.length-2];
  }

  showMorePlanets(){
    this.planetsService.getPlanets(this.planets.next).subscribe(data=>{
      this.planets.results = this.planets.results.concat(data.results);
      this.planets.next = data.next;
      this.planets.count = data.count;
    });
  }

  showMoreCharacters(){
    this.charactersService.getCharacters(this.characters.next).subscribe(data=>{
      this.characters.results = this.characters.results.concat(data.results);
      this.characters.next = data.next;
      this.characters.count = data.count;
    });
  }

}
