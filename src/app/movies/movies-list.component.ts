import { Component } from '@angular/core';
import { MovieService } from '../shared/movies.service';

@Component({
    selector: 'app-movies-list',
    templateUrl: './movies-list.component.html',
    styles: [
        `section:after {
            content: "";
            display: table;
            clear: both;
          }
          input{
              width:100%;
              margin-bottom:.6rem;
          }
        `
    ]
})

export class MovieListComponent {
    movies: any;

    constructor (private movieService: MovieService) {
        this.movies = this.movieService.getMovies();
    }

    searchMoviesList(event: KeyboardEvent) {
        const searchTerm = (event.target as HTMLInputElement).value;

        this.movies = this.movieService.searchMovies(searchTerm);
    }
}
