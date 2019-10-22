import { Component, OnInit } from '@angular/core';
import { MovieService } from './shared/movie.service';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from './shared/movie';

@Component({
  templateUrl: 'movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies:IMovie[];
  constructor(private movieService: MovieService, private route:ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.movies = this.route.snapshot.data['movies']
  }
}
