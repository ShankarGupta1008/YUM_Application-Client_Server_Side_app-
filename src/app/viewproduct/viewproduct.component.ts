import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Menu } from '../Menu';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  id:number=0;
  menu = new Menu()
  constructor(private _route:Router,private _service:RegistrationService,private _activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    // let id = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
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

  goToList(){
    console.log("back");
    this._route.navigate(['adminlogin'])
  }
}
