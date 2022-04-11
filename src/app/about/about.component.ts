import { ViewportScroller } from "@angular/common";
import { Component, OnInit, ViewRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector:'app-about',
  templateUrl:'./about.component.html'
})
export class AboutComponent implements OnInit{

  constructor(private route:ActivatedRoute,private vwRef:ViewportScroller){}
  
  ngOnInit(){
    var frag = this.route.snapshot.fragment
    this.vwRef.scrollToAnchor(frag)
    this.route.fragment.subscribe(
      (fragment:string)=>{
        this.vwRef.scrollToAnchor(fragment)
      }
    )
  }

}