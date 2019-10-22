import { Injectable } from "@angular/core";
import { Subject, Observable } from 'rxjs';
import { IMovie } from './movie';

@Injectable()
export class MovieService{

  constructor() {
    
  }
  getMovies():Observable<IMovie[]>{
    let subject = new Subject<IMovie[]>()
    setTimeout(() => {subject.next(MOVIES); subject.complete();},100)
      return subject
  }
    getMovie(id:number):IMovie{
      return MOVIES.find(movie => movie.id === id)
    }
}

const MOVIES:IMovie[] = [
  {
    id: 1,
    name: "The Fringe",
    genre: "Sci-Fi",
    producer: "Stephen Spielberg",
    imageUrl: "/assets/bg.jpeg",
    runtime:'2hrs',
    director:"Mark Wahlberg",
    release:'2019',
    rating: "A",
    actors:['James','Alex']
  },
  {
    id: 2,
    name: "The Assassin",
    genre: "Sci-Fi",
    producer: "Stephen Spielberg",
    imageUrl: "/assets/bg3.jpeg",
    runtime:'',
    director:"Mark Wahlberg",
    release:'2018',
    rating: "A",
    actors:['James','Alex']
  },
  {
    id: 3,
    name: "The Godfather",
    genre: "Crime",
    producer: "Stephen Spielberg",
    imageUrl: "/assets/bg2.jpeg",
    runtime:'',
    director:"Mark Wahlberg",
    release:'2017',
    rating: "A",
    actors:['James','Alex']
  },
  {
    id: 4,
    name: "The Expendables",
    genre: "Sci-Fi",
    producer: "Stephen Spielberg",
    imageUrl: "/assets/bg1.jpeg",
    runtime:'',
    director:"Mark Wahlberg",
    release:'2017',
    rating: "A",
    actors:['James','Alex']
  },
  {
    id: 5,
    name: "The Chef",
    genre: "Comedy",
    producer: "Stan Lee",
    imageUrl: "/assets/bg.jpeg",
    runtime:'',
    director:"Joe Smith",
    release:'2017',
    rating: "A",
    actors:['Van Hudson','Samantha Alex']
  },
  {
    id: 6,
    name: "Hunger Games",
    genre: "Adventure",
    producer: "Solomon Langley",
    imageUrl: "/assets/bg3.jpeg",
    runtime:'',
    director:"Mark Wahlberg",
    release:'2017',
    rating: "A",
    actors:['Harry Kane','Adeosun Kemi']
  },
]