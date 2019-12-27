import { Component, OnInit } from "@angular/core";
import { Title } from '@angular/platform-browser';

@Component({
    templateUrl:'./user-register.component.html',
    styles:[]
})

export class UserRegisterComponent implements OnInit{

    constructor(private title:Title){

    }
    ngOnInit(){
        this.title.setTitle('Miniflix -- Register')
    }
}