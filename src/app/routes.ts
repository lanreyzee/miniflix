import { Routes } from '@angular/router' 
import { MovieListComponent } from './movies/movie-list.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { Error404Component } from './errors/404.component';
import { MovieRouteActivator } from './movies/movie-details/movie-route-activator.service';
import { MovieListResolver } from './movies/movies-list-resolver.service';

export const movieRoutes:Routes = [
    {path:'movies', component: MovieListComponent, resolve:{movies:MovieListResolver}},
    {path:'movies/:id', component: MovieDetailsComponent, canActivate:[MovieRouteActivator]},
    {path:'user', loadChildren: './user/user.module#UserModule'},
    {path:'', redirectTo:'/movies', pathMatch:'full'},
    {path:'**', component: Error404Component}
]