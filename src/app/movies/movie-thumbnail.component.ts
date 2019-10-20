import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-movie-thumbnail',
    templateUrl: './movie-thumbnail.component.html',
    styles: [
        `article {
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
        .favBtn-isFav{
            background-color:darkred;
            color:#fff;
        }
        `
    ]
})

export class MovieThumbnailComponent {
    @Input() movie: any;

    storage = sessionStorage;

    toggleFavorite(e) {
        e.event.stopPropagation();

        const favBtn = (e.event.target as HTMLInputElement);

        if (this.storage.getItem(e.imdbID)) {
            favBtn.classList.remove('favBtn-isFav');
            favBtn.innerHTML = 'Favorite';

            this.storage.removeItem(e.imdbID);
        } else {
            favBtn.classList.add('favBtn-isFav');
            favBtn.innerHTML = 'Unfavorite';

            this.storage.setItem(e.imdbID, '1');
        }
    }
}
