import { Component, OnInit } from "@angular/core";
import { MovieService } from '../shared/movie.service';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from '../shared/movie';

@Component({
    templateUrl:'./movie-details.component.html',
    styles:[`
        .container{padding-left:20px;padding-right:20px}
        .movie-image{height:25%; width:25%}
    `]
})

export class MovieDetailsComponent implements OnInit{
    movie:IMovie
    constructor(private movieService:MovieService, private route:ActivatedRoute) {
        
    }
    ngOnInit() {
        this.movie = this.movieService.getMovie(+this.route.snapshot.params['id'])
     }
}