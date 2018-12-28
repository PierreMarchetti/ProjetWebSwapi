import { Component, OnInit } from '@angular/core';
import {Character} from '../models/Character';
import {CharacterService} from '../services/character.service';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  character:Character;

  constructor(private characterService:CharacterService, private route:ActivatedRoute) {
    characterService.getCharacter(this.route.snapshot.params.id).subscribe(data=>this.character=data);
  }

  //retourne la gravité sans la valeur chiffrée
  getGravity(gravity:string) {
    return gravity.replace(/[0-9]/g, '');
  }

  //transforme l'url en id
  getPlanetId(planetUrl:string) {
    var urlArray =  planetUrl.split('/');
    return '/planets/' + urlArray[urlArray.length-2];
  }

  ngOnInit() {
  }

}
