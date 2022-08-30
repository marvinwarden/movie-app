import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IMovie } from './movie';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Movies } from './find-movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  API_KEY = "########";
  resultBuffer = {};
  newSearch: any = '';
  
  
  
  url: string = "https://api.themoviedb.org/3/search/movie?";

  constructor(private http: HttpClient) { 
    

  }
  movieSearch: any = new Movies()
  

  getMovie(searchQuery: any): Observable<IMovie[]> {
    this.movieSearch.film = this.newSearch;
    const urlParams = new HttpParams()
      .set('api_key', this.API_KEY)
      .set('query', searchQuery)
    
    console.log("beast",searchQuery)
    const newUrl = `${this.url}${urlParams.toString()}`
    console.log("url", newUrl)
    return this.http.get<IMovie[]>(newUrl)
     
  }
  
}
