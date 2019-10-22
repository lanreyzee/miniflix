import { UserRegisterComponent } from './user-register.component';
import { UserLoginComponent } from './user-login.component';

export const userRoutes = [
    {path:'register', component:UserRegisterComponent},
    {path:'login', component:UserLoginComponent}
]