import { Injectable } from "@angular/core";
import { User } from "./user.model";


Injectable({
  providedIn:'root'
})
export class UserService{
  users:User[]=[];

  authenticateUser(user:User):User{
    return this.users.find(u=>{
      return u.getUserName()===user.getUserName() && u.getPassword()===user.getPassword();
    })
  }
  isUserAlreadyExist(userName:string):boolean{
    if(this.users.find(u=>{
      return u.getUserName()===userName;
    })) return true;
    return false;
  }
  addUser(user:User){
    this.users.push(user);
  }
}