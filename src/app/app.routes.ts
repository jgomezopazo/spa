import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { PageNotFoundComponentComponent } from './component/page-not-found-component/page-not-found-component.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscarheroeComponent } from './components/buscarheroe/buscarheroe.component';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: "buscarheroe/:termino", component:BuscarheroeComponent},
    { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
