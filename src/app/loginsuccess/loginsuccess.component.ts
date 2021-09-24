import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {  Menu } from '../Menu';
import { RegistrationService } from '../registration.service';
import { Cart } from '../Cart';
@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {
  //menu: Observable<Menu[]> = new Observable;
  //menuItem: Observable<Menu>=new Observable;
  menu: Observable<Menu[]>=new Observable;
  cart: Cart=new Cart();
  m=new Menu;
  constructor(private registration: RegistrationService,private _router: Router) { }

  ngOnInit(): void {
    this.displayMenu();
  }

  menuDetails(m: Menu){
    //this.cart=new Cart();
    this.cart.id=m.id;
    this.cart.itemName=m.name;
    this.cart.price=m.price;
    //console.log(this.cart);
    this.registration.addCartToRemote(this.cart).subscribe(
      data=>{
        console.log("Data Added Succesfully");
        // this._router.navigate(['/adminlogin'])
      },
      error=>console.log("error occured")
    )
  }

  displayMenu(){
    this.menu=this.registration.loginsuccessUserFromRemote();
  }

  cartDetails(){
    this._router.navigate(['/showcart'])
  }
}
