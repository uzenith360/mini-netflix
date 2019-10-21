import { Injectable } from '@angular/core';
import moviesList from 'src/app/shared/movies';

@Injectable()
export class MovieService {
    getMovies() {
        return moviesList;
    }

    searchMovies(searchTerm: string) {
        return moviesList.filter(
            movie => movie.Title.substring(0, searchTerm.length).toLowerCase() === searchTerm.toLowerCase()
        );
    }

    getMovie(imdbID: string) {
        return moviesList.find(movie => movie.imdbID === imdbID);
    }

    getMoviesList(movieIds: any) {
        return moviesList.filter(
            movie => movieIds.indexOf(movie.imdbID) !== -1
        );
    }
}