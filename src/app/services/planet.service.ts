import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Planet} from '../models/planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private httpClient:HttpClient) { }

  //recupère la planète désirée de l'api
  getPlanet(id:number) {
    return this.httpClient.get<Planet>(`https://cors-anywhere.herokuapp.com/https://swapi.co/api/planets/`+id);
  }
}
