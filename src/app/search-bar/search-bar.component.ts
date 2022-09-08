import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  resultBuffer: any = [];
  
  

  constructor(public movieService: MovieService ) { }

  

  
    
 
              
 



  ngOnInit() {
    
  }
  

}
