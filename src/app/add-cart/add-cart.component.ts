import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cart } from '../Cart';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit {

  cart: Observable<Cart[]>=new Observable;
  cartItem: Observable<Cart>=new Observable;
  totalPrice: number=0;
  count=0;
  constructor(private _route:Router,private _service:RegistrationService) { }
  
  ngOnInit(): void {
    let sum=0;
    this.count=0;
    //c : Cart[];
    // for(let data of cart){
    //   sum += data.price;
    // }
    this.totalPrice=0;
    this.cart = this._service.showCartToRemote();
    this.cart.subscribe(data=>{
      //console.log(data.length)

      for(let x=0;x<data.length;x++ ){
        //console.log(typeof(x))
        this.totalPrice=this.totalPrice + data[x].price
      }

    });

  }

  back(){
    this._route.navigate(['loginsuccess'])
  }

  remove(cartId: number){
    this._service.deleteCartByIdToRemote(cartId).subscribe(
      data=>{
        console.log(data);
        console.log("Deleted Successfully");
      },
      error=>console.log(error)
      );
      window.location.reload();
  }
  // totalPrice(){
  //   let sum=0;
  //   c : Cart[];
  //   for(let data of this.c){

  //   }
  // }

}
