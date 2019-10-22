import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from './auth.service';

@Component({
    templateUrl:'user-login.component.html',
    styles:[]
})

export class UserLoginComponent{
    email
    password
    constructor(private router:Router, private authService:AuthService){

    }
    login(formValues){
        this.authService.loginUser(formValues.email, formValues.password)
    }
    cancel(){
        this.router.navigate(['/movies'])
    }
}