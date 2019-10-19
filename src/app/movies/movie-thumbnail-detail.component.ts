import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-movie-thumbnail-detail',
    template: `&nbsp;
       <span *ngFor="let movieDetum of movieDetail; let i = index" [attr.data-index]="i">
        <span *ngIf="i != 0">, &nbsp;</span>
        <em>{{movieDetum}}</em>
       </span>
    `
})

export class MovieThumbnailDetailComponent {
 @Input() movieDetail: any;
}