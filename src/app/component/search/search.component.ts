import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent   {

  busqueda: any[] = [];
  loading: boolean = true;
  constructor(private spotify: SpotifyService) { }

  buscar(termino: string){

    this.spotify.getArtistas(termino)
        .subscribe( (data: any) => {
          this.busqueda = data;
          this.loading = false;
          console.log(this.busqueda);
        });

        console.log(termino);

  }

}
