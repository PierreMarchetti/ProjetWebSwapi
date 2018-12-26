import { Component, OnInit } from '@angular/core';
import {Planet} from '../models/planet';
import {Planets} from '../models/planets';
import {PlanetsService} from '../services/planets.service';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';


@Component({
  selector: 'app-planet',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {

  planets:Planets = {"count": null, "results":null, "next":null};

  constructor(private planetsService:PlanetsService, private route:ActivatedRoute) {
    planetsService.getPlanets().subscribe(planets=>this.planets=planets);
  }

  getPlanets():Planet[] {
    return this.planets.results;
  }

  ngOnInit() {

  }

}
