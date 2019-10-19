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
        `
    ]
})

export class MovieListComponent {
    movies = moviesList;
}
