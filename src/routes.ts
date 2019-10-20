import { Routes } from '@angular/router';
import { MovieListComponent } from './app/movies/movies-list.component';
import { ViewMovieComponent } from './app/routes/view-movie/view-movie.component';
import { ViewFavMoviesComponent } from './app/routes/view-fav-movies/view-fav-movies.component';

export const appRoutes: Routes = [
    {path: 'movies', component: MovieListComponent},
    {path: 'favs', component: ViewFavMoviesComponent},
    {path: 'movies/:id', component: ViewMovieComponent},
    {path: '', redirectTo: '/movies', pathMatch: 'full'}
];