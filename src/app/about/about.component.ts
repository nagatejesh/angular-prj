import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector:'app-about',
  templateUrl:'./about.component.html'
})
export class AboutComponent implements OnInit{

  constructor(private route:ActivatedRoute){}
  
  ngOnInit(){
    var frag = this.route.snapshot.fragment
    window.location.hash=frag;
    this.route.fragment.subscribe(
      (fragment:string)=>{
        window.location.hash=fragment;
      }
    )
  }

}