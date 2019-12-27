import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  template: `
    <h1 class="errorMessage">404</h1>
    <h3 class="text-center">Not Found</h3>
  `,

  styles: [`
    .errorMessage { 
      margin-top:100px; 
      font-size: 150px;
      text-align: center; 
    }`]
})
export class Error404Component implements OnInit{
  constructor(private title:Title) {

  }
  ngOnInit(){
    this.title.setTitle('Miniflix -- Not Found')
  }
}