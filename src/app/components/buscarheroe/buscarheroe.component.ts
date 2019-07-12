import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
              private _heroesService:HeroesService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      console.log("Termino de busqueda: ", params['termino']);
      this.termino = params['termino'];
      this.heroesEncontrados = this._heroesService.buscarHeroes(params['termino']);
      console.log("heroesEncontrados: ", this.heroesEncontrados);
    });
  }

}
