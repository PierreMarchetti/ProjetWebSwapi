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

  //recupère la planète désirée de l'api
  getPlanet(id:number) {
    return this.httpClient.get<Planet>(`https://cors-anywhere.herokuapp.com/https://swapi.co/api/planets/`+id)
    //parcours les url des résidents liés à la planète et récupère leurs noms
    .pipe(map((planet) => {
      planet.residentsName = [];
      planet.residents.map(residentUrl => {
        planet.residentsName.push();
        this.getPerson(residentUrl).subscribe((data:any)=>planet.residentsName.push(data.name))
      })
      console.log(planet);
      return planet;
    }))
  }

  getPerson(url:string) {
    return this.httpClient.get(url);
  }
}
