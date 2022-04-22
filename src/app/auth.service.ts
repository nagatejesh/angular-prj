import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { UserService } from "./user.service";

@Injectable({
  providedIn:'root'
})
export class AuthService{
  loggedIn = false;

  constructor(private userService:UserService){}

  isAuthenticated(){
    const promise = new Promise(
      (resolve,reject)=>{
        setTimeout(()=>{
          resolve(this.loggedIn);
        },800)
      }
    )
    return promise;
  }

  login(user:User):boolean{
    if(this.userService.authenticateUser(user)) this.loggedIn=true;
    sessionStorage.setItem('loggedIn','true');
    return this.loggedIn;
  }
  logout(){
    this.loggedIn=false;
  }

}