import { Component } from '@angular/core';
import { MovieService } from 'src/app/shared/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './view-movie.component.html',
    styles: [
        `
        article{
            width:100%;
            display:table;
            margin:0 auto;
        }
        @media only screen and (min-width: 768px) {
            article {
                width: 30%;
            }
        }
        .content-div{
            padding:.6rem;
        }
        .img-div{
            height:14rem;
            overflow:hidden;
            background-color:#000;
        }
        img{
            width:100%;
        }
        `
    ]
})

export class ViewMovieComponent {
    movie: any;

    constructor (private movieService: MovieService, private route: ActivatedRoute) {

    }

    ngOnInit () {
        this.movie = this.movieService.getMovie(this.route.snapshot.params.id);
    }
}