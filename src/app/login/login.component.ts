import { Route } from '@angular/compiler/src/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../Admin';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user= new User()
  msg=''
  admin=new Admin()

  constructor(private _service : RegistrationService,private _router: Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("response recieved");
        this._router.navigate(['/loginsuccess']);
      } ,
      error => {
        console.log("exception occured");
        this.msg="Invalid credentials"
      } 
    );
  }

  loginAdmin(){
    this._service.loginAdminFromRemote(this.admin).subscribe(
      data => {
        console.log("response recieved");
        this._router.navigate(['/adminlogin']);
      } ,
      error => {
        console.log("exception occured");
        this.msg="Invalid credentials"
      } 
    );
  }

}
