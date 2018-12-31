import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Planet} from '../models/planet';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private httpClient:HttpClient) { }

  /*
  certaine requête sont bloqués par la same-origin policy du navigateur
  une site web intermédiaire est utilisée pour contourner le problème
  */
  corsUrl = 'https://cors-anywhere.herokuapp.com/'

  //recupère la planète désirée de l'api
  getPlanet(id:number) {
    return this.httpClient.get<Planet>(this.corsUrl + 'https://swapi.co/api/planets/'+id)
    //parcours les urls des résidents liés à la planète et récupère leurs noms
    .pipe(map((planet) => {
      planet.residentsName = [];
      planet.residents.map(residentUrl => {
        planet.residentsName.push();
        this.httpClient.get(residentUrl).subscribe((data:any)=>planet.residentsName[residentUrl] = data.name)
      })
      return planet;
    }))
  }
}
