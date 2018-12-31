import { Component, OnInit } from '@angular/core';
import {Character} from '../models/character';
import {Characters} from '../models/characters';
import {CharactersService} from '../services/characters.service';
import {UrlToRouteService} from '../services/url-to-route.service';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';


@Component({
  selector: 'app-character',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  characters:Characters;


  constructor(private charactersService:CharactersService, private urlToRouteService:UrlToRouteService, private route:ActivatedRoute) {
    charactersService.getCharacters().subscribe(data=>this.characters=data);
  }

  //charge de nouveaux personnages et actualise la page
  showMore(){
    this.charactersService.getCharacters(this.characters.next).subscribe(data=>{
      this.characters.results = this.characters.results.concat(data.results);
      this.characters.next = data.next;
      this.characters.count = data.count;
    });
  }

  ngOnInit() {

  }

}
