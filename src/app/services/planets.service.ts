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

  //recupère des planètes de l'api
  getPlanets(url?:string) {
    return this.httpClient.get<Planets>(url ? url : `https://swapi.co/api/planets/`);
  }
}
