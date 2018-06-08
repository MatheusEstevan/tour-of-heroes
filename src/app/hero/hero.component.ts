import { Component, OnInit } from '@angular/core';
import {HeroService} from "../hero.service";
import { Hero } from '../hero';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heroes: Hero[];  
  selectedHero: Hero;
  
  onSelect(hero: Hero){
    this.selectedHero = hero;
  }

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
