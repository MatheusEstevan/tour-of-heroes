import { Component, OnInit } from '@angular/core';
import { heroes }from '../heroes-mock';
import { Hero } from '../hero';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heroes = heroes;
  selectedHero: Hero;
  
  onSelect(hero: Hero){
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit() {
  }

}
