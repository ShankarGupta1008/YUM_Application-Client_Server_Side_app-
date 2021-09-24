import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../Menu';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  menu = new Menu()
  constructor(private _route:Router,private _service:RegistrationService) { }

  ngOnInit(): void {
  }

  addProductformsubmit(){
    //console.log(this.menu);
    this._service.addUserToRemote(this.menu).subscribe(
      data=>{
        //console.log("Data Added Succesfully");
        this._route.navigate(['/adminlogin'])
      },
      error=>console.log("error occured")
    )
  }
  goToList(){
    console.log("back");
    this._route.navigate(['adminlogin'])
  }
}
