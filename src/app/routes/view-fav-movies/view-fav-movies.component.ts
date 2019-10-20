import { Component } from '@angular/core';
import { MovieService } from 'src/app/shared/movies.service';

@Component({
    templateUrl: './view-fav-movies.component.html',
    styles: [
        `
        article {
            margin-bottom:2rem;
            margin-right:.5rem;
            height:18rem;
            background-color:blue;
            color:#fff;
            float: left;
            width: 20%;
        }
        .content-div{
            padding:.6rem;
        }
        .img-div{
            height:10rem;
            overflow:hidden;
            background-color:#000;
        }
        img{
            width:100%;
        }
        `
    ]
})

export class ViewFavMoviesComponent {
    movies: any;

    constructor(private movieService: MovieService) {
        this.movies = this.movieService.getMoviesList(Object.keys(sessionStorage));
    }
}