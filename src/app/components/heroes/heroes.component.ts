import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  private _heroesService = new HeroesService();
  heroes:Heroe[];

  constructor( private _router:Router ) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log("ngOnInit: ", this.heroes );

  }

  verHeroe(idx:number){
    this._router.navigate(['/heroe', idx]);

  }

}
