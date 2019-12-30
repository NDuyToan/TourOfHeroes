import { Component, OnInit } from '@angular/core';
import { HeroService} from './../hero.service';
import { Hero} from './../hero.class'
import { from } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public heroes: Hero[] = [];
  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.getHero();
  }
  getHero(){
    this.heroService.getHeroes().subscribe( hero => {
      this.heroes = hero.slice(0,4);
    })
  }

}
