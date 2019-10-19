import { Injectable } from '@angular/core';
import moviesList from 'src/assets/movies';

@Injectable()
export class MovieService {
    getMovies() {
        return moviesList;
    }

    searchMovies(searchTerm) {
        return moviesList.filter(movie => movie.Title.substring(0, searchTerm.length).toLowerCase() === searchTerm.toLowerCase())
    }
}