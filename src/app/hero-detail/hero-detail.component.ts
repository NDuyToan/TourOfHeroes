import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';
import { Hero } from '../hero.class';
import { HeroService } from './../hero.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
 // @Input() hero:Hero;
 public  hero: Hero;
  constructor(
    private route: ActivatedRoute,
    public location: Location,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.getHero();
  }
  getHero(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }
  goBack(){
    this.location.back();
  }

}
