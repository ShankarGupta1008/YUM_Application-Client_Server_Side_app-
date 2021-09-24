import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http'
import { Menu } from './Menu';
import { Admin } from './Admin';
import { Cart } from './Cart';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService  {

  constructor(private _http:HttpClient) { }

  public loginUserFromRemote(user : User):Observable<any>{
    return this._http.post<any>("http://localhost:1008/login",user);
  }

  public registerUserFromRemote(user : User):Observable<any>{
    return this._http.post<any>("http://localhost:1008/registerUser",user);
  }

  public loginsuccessUserFromRemote():Observable<any>{
    return this._http.get<any>("http://localhost:1008/login/menu");
  }

  public adminLoginUserFromRemote():Observable<any>{
    return this._http.get<any>("http://localhost:1008/displayMenu");
  }

  public loginAdminFromRemote(admin : Admin):Observable<any>{
    return this._http.post<any>("http://localhost:1008/adminlogin",admin);
  }

  public addUserToRemote(menu :Menu):Observable<any>{
    //console.log(menu);
    return this._http.post<any>("http://localhost:1008/additem",menu);
  }

  public fetchMenuByIdToRemote(id : number):Observable<any>{
    return this._http.get<any>("http://localhost:1008/fetchbyid/"+id);
  }

  public deleteByIdToRemote(id : number):Observable<any>{
    return this._http.delete<any>("http://localhost:1008/deletebyid/"+id);
  }

  public deleteCartByIdToRemote(cartId : number):Observable<any>{
    return this._http.delete<any>("http://localhost:1008/deletebycartid/"+cartId);
  }

  public updateItemFromRemote(id:number,menu : Menu):Observable<any>{
    return this._http.put("http://localhost:1008/updateMenu/"+id,menu);
  }
  
  public addCartToRemote(cart :Cart):Observable<any>{
    //console.log(menu);
    return this._http.post<any>("http://localhost:1008/addCart",cart);
  }

  public showCartToRemote():Observable<any>{
    return this._http.get<any>("http://localhost:1008/showCart")
  }

  handleError(error: Response){
    console.log("err");
  };
  
}
