import {Component, Input} from '@angular/core';


@Component({
    selector: 'app-movie-thumbnail',
    templateUrl: './movie-thumbnail.component.html',
    styles: [
        `article {
            padding:.6rem;
            margin-bottom:2rem;
            margin-right:.3rem;
            height:17rem;
            background-color:blue;
            color:#fff;
            float: left;
            width: 20%;
        }`
    ]
})

export class MovieThumbnailComponent {
    @Input() movie: any;
}
