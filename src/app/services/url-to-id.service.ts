import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Character} from '../models/character';
import {Planet} from '../models/planet';


@Injectable({
  providedIn: 'root'
})
export class UrlToIdService {

  constructor(private httpClient:HttpClient) { }

  //retourne le lien vers la page du personnage à partir de l'url donné en paramètre
  getCharacterId(characterUrl:string) {
    var urlArray = characterUrl.split('/');
    return 'characters/' + urlArray[urlArray.length-2];
  }

  //retourne le lien vers la page de la planète à partir de l'url donné en paramètre
  getPlanetId(planetUrl:string) {
    var urlArray = planetUrl.split('/');
    return 'planets/' + urlArray[urlArray.length-2];
  }
}
