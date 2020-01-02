import { Component, OnInit } from '@angular/core';

import { Hero} from './../../hero.class';
import { HeroService } from './../../hero.service';
//import { HEROES} from '../../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero : Hero = {
  //   id:1,
  //   name: 'Windstorm'
  // };
  heroes: Hero[];
 // selectedHero: Hero;
  

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void{
    //this.heroes = this.heroService.getHeroes()
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  // onSelect(value: Hero){
  //   this.selectedHero = value;
  // }

}
