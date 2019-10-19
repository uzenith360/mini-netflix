import {Component} from '@angular/core';
import moviesList from 'src/assets/movies';

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
    movies = moviesList;

    searchMoviesList (event: KeyboardEvent) {
        const searchTerm =  (event.target as HTMLInputElement).value;
        
        this.movies = moviesList.filter(movie => movie.Title.substring(0, searchTerm.length).toLowerCase() === searchTerm.toLowerCase());
    }
}
