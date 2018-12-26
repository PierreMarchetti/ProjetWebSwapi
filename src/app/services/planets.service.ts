import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Planet} from '../models/planet';
import {Planets} from '../models/planets';


@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private httpClient:HttpClient) { }

  //recupère les planètes de l'api
  getPlanets() {
    return this.httpClient.get<Planets>(`https://swapi.co/api/planets/`);
    /*
    .pipe((data) => {
      console.log(data);
      return [];
    })*/



  }
}
