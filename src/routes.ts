import { Routes } from '@angular/router';
import { MovieListComponent } from './app/movies/movies-list.component';
import { ViewMovieComponent } from './app/routes/view-movie/view-movie.component';

export const appRoutes: Routes = [
    {path: 'movies', component: MovieListComponent},
    {path: 'movies/:id', component: ViewMovieComponent},
    {path: '', redirectTo: '/movies', pathMatch: 'full'}
];