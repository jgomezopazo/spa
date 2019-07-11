import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe:Heroe;
  constructor(private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private _router:Router) {

    this._activatedRoute.params.subscribe(params => {
      this.heroe = _heroesService.getHeroe(params['id']);
    });

  }

  ngOnInit() {
    console.log(this.heroe);
  }

  volver(){
    this._router.navigate['/heroes'];
  }

}
