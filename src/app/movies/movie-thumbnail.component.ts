import {Component, Input} from '@angular/core';


@Component({
    selector: 'app-movie-thumbnail',
    templateUrl: './movie-thumbnail.component.html',
    styles: [
        `article {
            margin-bottom:2rem;
            margin-right:.5rem;
            height:27rem;
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

export class MovieThumbnailComponent {
    @Input() movie: any;
}
