import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";
import { CanDeactivateComponent } from "../can-deactivate-gaurd.service";
import { User } from "../user.model";

@Component({
  selector:'app-login',
  templateUrl:'./login.component.html'
})

export class LoginComponent implements OnInit, CanDeactivateComponent{
  isLoggedIn=false;
  constructor(private authService:AuthService){}
  ngOnInit(){
    this.isLoggedIn = this.authService.loggedIn;
  }
  login(){
    this.authService.login(new User('','','','',''));
    this.isLoggedIn=true;
  }
  logout(){
    this.authService.logout();
    this.isLoggedIn=false;
  }
  canDeactivate():Observable<boolean> | Promise<boolean> | boolean{

    if(this.isLoggedIn)return true;
    else return confirm('Do you want to leave without login? If you don\'t, then your access to the application will be limited!!')
  }

}
