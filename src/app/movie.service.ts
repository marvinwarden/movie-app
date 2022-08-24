import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IMovie } from './movie';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  resultBuffer = {};
  newSearch: any = '';
  
  
  url: string = "https://api.themoviedb.org/3/search/movie?";

  constructor(private http: HttpClient) { }

  getMovie(search: string): Observable<IMovie[]> {

    const urlParams = search ? new HttpParams()
      .set('api_key', environment.API_KEY)
      .set('query', search)
        : {};

    const newUrl = `${this.url}${urlParams.toString()}`
   
    return this.http.get<IMovie[]>(newUrl)
     .map(data => {
      this.resultBuffer = data.results
      return console.log(this.resultBuffer)
     })
  }
}
