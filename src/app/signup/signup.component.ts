import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector:'app-signup',
  templateUrl:'./signup.component.html'
})

export class SignupComponent implements OnInit{

  ngOnInit(){
    console.log(sessionStorage)
  }
  submitform(form:NgForm){
    console.log(form);
    
  }
}