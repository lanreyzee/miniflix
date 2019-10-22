import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { userRoutes } from './user.routes';
import { UserRegisterComponent } from './user-register.component';
import { UserLoginComponent } from './user-login.component';


@NgModule({
  declarations: [
    UserRegisterComponent,
    UserLoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    FormsModule,
  ]
})
export class UserModule { }
