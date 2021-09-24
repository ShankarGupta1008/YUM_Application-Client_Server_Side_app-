import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from '../Menu';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  id:number=0;
  menu: Menu = new Menu();
  constructor(private _route:Router,private _service:RegistrationService,private _activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    // let id = this._activatedRoute.snapshot.paramMap.get('id');
    // this._service.fetchProductByIdToRemote(id).subscribe(
    //   data=>{
    //     console.log("data recieved");
    //     this.menu=data;
        
    //   },
    //   error=>console.log("error occured")
    // )
    this.menu = new Menu();
    this.id = this._activatedRoute.snapshot.params['id'];
    this._service.fetchMenuByIdToRemote(this.id).subscribe(
      data=>{
        console.log("data recieved");
        this.menu = data;
      },
      error=>console.log("error occured")
    )
  }

  updateProductformsubmit(){
    this._service.updateItemFromRemote(this.id,this.menu).subscribe(
      data=>{
        console.log("Data Added Succesfully");
        this.menu = new Menu();
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
