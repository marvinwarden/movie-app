import { Component, OnInit } from '@angular/core';
import { IMovie } from '../movie';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  
  constructor(result: IMovie) {
    result: result.results
   }

  ngOnInit(): void {
   console.log("test", this.result)
  }

}
