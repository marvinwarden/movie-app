import { Component, OnInit } from '@angular/core';
import { IMovie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  
  constructor( public movie: MovieService) {
   
    
   }
  ngOnInit(): void {
    
  }

}
