import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IMovie } from '../movie';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieInfoComponent } from '../movie-info/movie-info.component';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  resultBuffer = {};
  newSearch: any = '';
  
  
  url: string = "https://api.themoviedb.org/3/search/movie?";

  constructor() { }

  

  // searchMovie(search: string)  {
  //   this.newSearch = search;
  // }

  getMovie(search: string) {

    const urlParams = search ? new HttpParams()
      .set('api_key', environment.API_KEY)
      .set('query', search)
        : {};

    const newUrl = `${this.url}${urlParams.toString()}`
   
   return this.http.get<IMovie>(newUrl)
     .subscribe(data => {
      this.resultBuffer = data.results
      console.log(this.resultBuffer)
     })
  }

  ngOnInit(): void {
  }

}
