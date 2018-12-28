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

  //recupère la planète désirée de l'api
  getCharacter(id:number) {
    return this.httpClient.get<Character>(`https://cors-anywhere.herokuapp.com/https://swapi.co/api/people/`+id)
    //parcours les url des résidents liés à la planète et récupère leurs noms
    .pipe(map((character) => {
    this.getPlanet(character.homeworld).subscribe((data:any)=>character.homeworldName = data.name)

      console.log(character);
      return character;
    }))
  }

  getPlanet(url:string) {
    return this.httpClient.get(url);
  }
}
