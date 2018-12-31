import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Character} from '../models/character';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private httpClient:HttpClient) { }

  /*
  certaine requête sont bloqués par la same-origin policy du navigateur
  un site web intermédiaire est utilisée pour contourner le problème
  */
  corsUrl = 'https://cors-anywhere.herokuapp.com/'

  //recupère la planète désirée de l'api
  getCharacter(id:number) {
    return this.httpClient.get<Character>(this.corsUrl + 'https://swapi.co/api/people/'+id)
    //envoie une requête à l'url de homeworld et stocke le nom de la planète
    .pipe(map((character) => {
    this.httpClient.get(character.homeworld).subscribe((data:any)=>character.homeworldName = data.name)
      return character;
    }))
  }
}
