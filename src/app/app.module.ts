import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//services
import { HeroesService } from './services/heroes.service';


//component
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { PageNotFoundComponentComponent } from './component/page-not-found-component/page-not-found-component.component';

//routes
import { FeatureRoutingModule } from './app.routes';
import { HeroeComponent } from './components/heroe/heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    PageNotFoundComponentComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    FeatureRoutingModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
