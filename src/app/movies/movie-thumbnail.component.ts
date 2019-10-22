import { Component, Input } from "@angular/core";
import { IMovie } from './shared/movie';

@Component({
    selector:'movie-thumbnail',
    template:`<div class="card" [routerLink]="['/movies', movie.id]">
                <div class="card-body">
                <img [src]="movie?.imageUrl" alt="movie?.name" class="card-img-top movie-image">
                    <h4 class="card-title text-center">{{movie.name }} ({{movie.release}})</h4>
                </div>
                </div>
            `,
    styles:[`
            .movie-image{
                height:200px;
                width:100%;
            }
            .pad-left{ 
                margin-left: 10px 
            }
            .well div{ 
                color:#bbb;
                cursor:pointer;
            }
        `]
})

export class MovieThumbnailComponent{
    @Input() movie:IMovie;
}