import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IMovie } from '../movie';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieInfoComponent } from '../movie-info/movie-info.component';
import { MovieService } from '../movie.service';
import { Movies } from '../find-movie';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  resultBuffer: any = [];
  
  movies: IMovie[] = [];
  newSearch: any = '';
  found = new Movies()

  constructor(private movieService: MovieService ) { }

  
  nameQuery(query: any) {
      this.newSearch = query;
      this.found.film = query;
      console.log("test",this.found.film)

      this.movieService.getMovie(this.found.film)  
      .subscribe((data) => {
          this.resultBuffer.push(data) 
          console.log("result",this.resultBuffer
          )}
          )
  }
  
    
 
              
 



  ngOnInit() {
    
  }
  

}
