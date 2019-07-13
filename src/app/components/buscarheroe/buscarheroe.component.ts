import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscarheroe',
  templateUrl: './buscarheroe.component.html',
  styles: []
})
export class BuscarheroeComponent implements OnInit {

  heroesEncontrados:Heroe[] = [];
  termino:string = "";
  constructor(private _activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService,
              private _router:Router) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      console.log("Termino de busqueda: ", params['termino']);
      this.termino = params['termino'];
      this.heroesEncontrados = this._heroesService.buscarHeroes(params['termino']);
      console.log("heroesEncontrados: ", this.heroesEncontrados);
    });
  }

  verHeroe(idx: number) {
    this._router.navigate(['/heroe', idx]);

  }

}
