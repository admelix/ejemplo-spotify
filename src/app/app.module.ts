import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { SearchComponent } from './component/search/search.component';
import { ArtistaComponent } from './component/artista/artista.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';

// rutas
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { HttpClientModule } from '@angular/common/http';
import { NoimagePipe } from './pipes/noimage.pipe';
import { TarjetasComponent } from './component/tarjetas/tarjetas.component';
import { LoadingComponent } from './component/shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    TarjetasComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
