import { Injectable } from '@angular/core';
import { Hero } from './hero.class';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient,HttpErrorResponse ,HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  public heroesUrl = 'http://5e0d919036b80000143db63b.mockapi.io/Heroes/heroes';  // URL to web api
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }
  getHeroes(): Observable<Hero[]> {
    //this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl);
  }
  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched heroes ${id}`);
    //return this.http.get<Hero[]>(this.heroesUrl);
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url);
    //return of(HEROES.find(hero => hero.id == id))
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
