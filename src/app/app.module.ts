import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieListComponent } from './movies/movie-list.component';
import { MovieThumbnailComponent } from './movies/movie-thumbnail.component';
import { FooterComponent } from './footer/footer.component';
import { MovieService } from './movies/shared/movie.service';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { movieRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { MovieRouteActivator } from './movies/movie-details/movie-route-activator.service';
import { MovieListResolver } from './movies/movies-list-resolver.service';
import { AuthService } from './user/auth.service';
import { DewsComponent } from './dews/dews.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieListComponent,
    MovieThumbnailComponent,
    FooterComponent,
    MovieDetailsComponent,
    MovieDetailsComponent,
    Error404Component,
    DewsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(movieRoutes)
  ],
  providers: [
    MovieService, 
    MovieRouteActivator,
    MovieListResolver,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
