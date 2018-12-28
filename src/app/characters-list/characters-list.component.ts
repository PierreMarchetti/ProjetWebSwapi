import { Component, OnInit } from '@angular/core';
import {Character} from '../models/character';
import {Characters} from '../models/characters';
import {CharactersService} from '../services/characters.service';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';


@Component({
  selector: 'app-character',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  characters:Characters = {"count": null, "results":[], "next":null};

  constructor(private charactersService:CharactersService, private route:ActivatedRoute) {
    charactersService.getCharacters().subscribe(data=>this.characters=data);
  }

  getCharacters():Character[] {
    return this.characters.results;
  }

  //charge de nouvelles planètes et les actualise l'affichage
  showMore(){
    this.charactersService.getCharacters(this.characters.next).subscribe(data=>{
      this.characters.results = this.characters.results.concat(data.results);
      this.characters.next = data.next;
      this.characters.count = data.count;
    });
  }

  //recupère l'id à partir de l'url du personnage donné en paramètre pour créer un lien dans l'application
  getId(character:Character) {
    var urlArray = character.url.split('/');
    return 'characters/' + urlArray[urlArray.length-2];
  }



  ngOnInit() {

  }

}
