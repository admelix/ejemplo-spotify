import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getQuery( query: string) {

    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQAkt4H0GWdnRW5i6u9afnD6iAWEaScBayrhpU_b1Tng1fwLNJWCpXPzfKiVCt2g4dQBR8O3bYd2FVjNIP8'
    });

    return this.http.get(url , { headers });
  }



  getNewReleases(){

    // this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
    //     .subscribe( data =>{
    //       console.log(data);
    //     });
    return this.getQuery('browse/new-releases')
              .pipe( map (data => data['albums'].items));
  }

  getArtistas(termino: string){

    return this.getQuery(`search?q=${termino}&type=artist&market=us&limit=10`)
                     .pipe( map( data => data['artists'].items));
  }

  getArtista(id: string){

    return this.getQuery(`artists/${id}`);
                    //  .pipe( map( data => data['artists'].items));
  }

  getTopTracks(id: string){

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
               .pipe( map( data => data['tracks']));

  }


}
