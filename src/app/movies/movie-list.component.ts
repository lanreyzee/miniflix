import { Component, OnInit } from '@angular/core';
import { MovieService } from './shared/movie.service';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from './shared/movie';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: 'movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies:IMovie[];
  constructor(private movieService: MovieService, private route:ActivatedRoute, private title:Title) { 
    
  }

  ngOnInit() {
    this.movies = this.route.snapshot.data['movies']
    this.title.setTitle('Miniflix -- All Movies')
  }
}
