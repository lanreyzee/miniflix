import { Injectable } from "@angular/core";
import { IUser } from './user.model';

@Injectable()

export class AuthService{
    currentUser:IUser

    loginUser(email:string, password:string){
        this.currentUser = {
            id:1,
            fullName:"Lanre Tiamiyu",
            email:"lanrebob1@gmail.com",
            password:"this1234"
        }
    }
    isAuthenticated(){
        return !!this.currentUser;
    }
}