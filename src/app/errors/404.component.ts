import { Component } from '@angular/core'

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
export class Error404Component{
  constructor() {

  }

}