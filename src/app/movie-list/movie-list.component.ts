import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(
    private listService: ListService
    ) { }

    addList (movie: string) {
      this.listService.addToList(movie)
    }

  ngOnInit(): void {
  }

}
