import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data, Params, Router } from "@angular/router";
import { Anime } from "../../anime.model";
import { AnimeService } from "../../anime.service";

@Component({
  selector:'app-bigani',
  templateUrl:'./bigani.component.html'
})
export class BiganiComponent implements OnInit{
  anime:Anime=null;

  constructor(private animeServive:AnimeService,
    private route:Router,
    private activeRoute:ActivatedRoute){}
  ngOnInit(){
    this.activeRoute.data.subscribe(
      (data:Data)=>{
        this.anime=data['anime']
      }
    )
    //   var i= +this.activeRoute.snapshot.params['index'];
    //   this.anime =this.animeServive.getAnimeByIndex(i);
    //   if(!this.anime)
    //     this.route.navigate(['/notfound']);
    // this.activeRoute.params.subscribe(
    //   (param:Params)=>{
    //     var i= +param['index'];
    //     this.anime =this.animeServive.getAnimeByIndex(i);
    //     if(!this.anime)
    //       this.route.navigate(['/notfound']);
    //   }
    // )
  }
}