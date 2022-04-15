import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
  selector:'app-login',
  templateUrl:'./login.component.html'
})

export class LoginComponent implements OnInit{
  isLoggedIn=false;
  constructor(private authService:AuthService){}
  ngOnInit(){
    this.isLoggedIn = this.authService.loggedIn;
  }
  login(){
    this.authService.login();
    this.isLoggedIn=true;
  }
  logout(){
    this.authService.logout();
    this.isLoggedIn=false;
  }

}
