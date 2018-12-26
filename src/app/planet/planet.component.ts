import { Component, OnInit } from '@angular/core';
import {Planet} from '../models/planet';
import {Planets} from '../models/planets';
import {PlanetsService} from '../services/planets.service';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';


@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

  planets:Planets;

  constructor(private planetsService:PlanetsService, private route:ActivatedRoute) {
    planetsService.getPlanets().subscribe(planets=>this.planets=planets);
  }

  getPlanets():Planet[] {
    if(this.planets) {
      return this.planets.results;
    }
    return;
  }

  ngOnInit() {

  }

}
