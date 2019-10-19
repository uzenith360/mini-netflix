import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movies/movies-list.component';
import { MovieThumbnailComponent } from './movies/movie-thumbnail.component';
import { MovieThumbnailDetailComponent } from './movies/movie-thumbnail-detail.component';
import { ViewMovieComponent } from './routes/view-movie/view-movie.component';
import { MovieService } from './shared/movies.service';
import { appRoutes } from '../routes';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieThumbnailComponent,
    MovieThumbnailDetailComponent,
    ViewMovieComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
