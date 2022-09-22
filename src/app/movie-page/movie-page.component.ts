import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {

  @Input() title = '';
  @Input() releaseDate = '';
  @Input() synopsis = '';

  constructor() { }

  ngOnInit(): void {
  }

}
