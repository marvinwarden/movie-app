import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { MovieService } from './movie.service';
import { MoviePageComponent } from './movie-page/movie-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    MovieInfoComponent,
    MoviePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
