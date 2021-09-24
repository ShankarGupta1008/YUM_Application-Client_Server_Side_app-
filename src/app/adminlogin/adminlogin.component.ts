import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Menu } from '../Menu';
import { RegistrationService } from '../registration.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  menu: Observable<Menu[]>=new Observable;
  constructor(private registration: RegistrationService,private _router: Router) { }

  ngOnInit(): void {
    //this.displayMenu();
    this.getMenu();
  }
  // displayMenu(){
  //   this.menu=this.registration.loginsuccessUserFromRemote();
  // }

  goToAddProduct(){
    this._router.navigate(['/addproduct'])
  }

  goToEditProduct(id:number){
    console.log("id"+id);
    this._router.navigate(['/editproduct',id])
  }

  goToViewProduct(id:number){
    console.log("id"+id);
    this._router.navigate(['/viewproduct',id])
  }

  deleteProduct(id: number){
    this.registration.deleteByIdToRemote(id).subscribe(
      data=>{
        console.log(data);
        console.log("Deleted Successfully");
        
        // this._router.navigate(['/adminlogin'])
      },
      error=>console.log(error)
      );
      this.getMenu();
      window.location.reload();
  }

  getMenu()
  {
    this.menu=this.registration.adminLoginUserFromRemote();
  }
}
