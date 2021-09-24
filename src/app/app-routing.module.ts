import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCartComponent } from './add-cart/add-cart.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'loginsuccess',component:LoginsuccessComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'editproduct',component:EditproductComponent},
  {path:'viewproduct',component:ViewproductComponent},
  {path:'editproduct/:id',component:EditproductComponent},
  {path:'viewproduct/:id',component:ViewproductComponent},
  {path:'showcart',component:AddCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
