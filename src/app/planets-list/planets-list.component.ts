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

  planets:Planets = {"count": null, "results":[], "next":null};

  constructor(private planetsService:PlanetsService, private route:ActivatedRoute) {
    planetsService.getPlanets().subscribe(data=>this.planets=data);
  }

  getPlanets():Planet[] {
    return this.planets.results;
  }

  showMore(){
    this.planetsService.getPlanets(this.planets.next).subscribe(data=>{
      this.planets.results = this.planets.results.concat(data.results);
      this.planets.next = data.next;
      this.planets.count = data.count;
    });

    //this.planets.results = this.planets.results.concat(this.planets.results);
  }

  ngOnInit() {

  }

}
