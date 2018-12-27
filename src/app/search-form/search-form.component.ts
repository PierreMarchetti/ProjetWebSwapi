import { Component, OnInit } from '@angular/core';
import {Planet} from '../models/planet';
import {Planets} from '../models/planets';
import {PlanetsService} from '../services/planets.service';
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
  url:string;

  constructor(private planetsService:PlanetsService, private route:ActivatedRoute) {

  }

  ngOnInit() {
  }

  search() {
    this.url="https://swapi.co/api/"+this.typeSearch+"/?search="+this.name;
    console.log(this.url);
    this.planetsService.getPlanets(this.url).subscribe(data=>this.planets=data);
  }

}
