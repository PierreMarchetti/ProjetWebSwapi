import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Character} from '../models/character';
import {Characters} from '../models/characters';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private httpClient:HttpClient) { }

  //recupère les personnes de l'api
  getCharacters(url?:string) {
    return this.httpClient.get<Characters>(url ? url : `https://swapi.co/api/people/`);
  }
}
