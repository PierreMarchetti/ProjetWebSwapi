import { Component, OnInit } from '@angular/core';
import {Planet} from '../models/planet';
import {PlanetService} from '../services/planet.service';
import {UrlToRouteService} from '../services/url-to-route.service';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';


@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

  planet:Planet;

  constructor(private planetService:PlanetService, private urlToRouteService:UrlToRouteService, private route:ActivatedRoute) {
    planetService.getPlanet(this.route.snapshot.params.id).subscribe(data=>this.planet=data);
  }

  //retourne la gravité sans la valeur chiffrée
  getGravity(gravity:string) {
    return gravity.replace(/[0-9]/g, '');
  }

  ngOnInit() {
  }

}
