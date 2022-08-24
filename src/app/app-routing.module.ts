import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieInfoComponent } from './movie-info/movie-info.component';

const routes: Routes = [
  { path: 'movie-info', component: MovieInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
