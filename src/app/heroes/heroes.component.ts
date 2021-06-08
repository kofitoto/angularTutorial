import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes :  Hero [] =[];
  selectedHero?: Hero;
  constructor(private heroService: HeroService) {}//hemos inyectado el servicio


  ngOnInit(): void {//cuando arranque el componente y lo tengas en pantalla...
    this.getHeroes();
  }

  onSelect(hero : Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
}
}
