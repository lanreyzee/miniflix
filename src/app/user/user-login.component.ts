import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from './auth.service';
import { Title } from '@angular/platform-browser';

@Component({
    templateUrl:'user-login.component.html',
    styles:[]
})

export class UserLoginComponent implements OnInit{
    email
    password
    constructor(private router:Router, private authService:AuthService, private title:Title){

    }
    ngOnInit(){
        this.title.setTitle('Miniflix -- Login')
    }
    login(formValues){
        this.authService.loginUser(formValues.email, formValues.password)
    }
    cancel(){
        this.router.navigate(['/movies'])
    }
}