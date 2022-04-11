import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Anime } from "../anime.model";
import { AnimeService } from "../anime.service";


@Component({
  selector:'app-anime',
  templateUrl:'./anime.component.html'
})

export class AnimeComponent implements OnInit{
  animes:Anime[]=[]
  constructor(private animeService:AnimeService,
      private route:Router,
      private activeRoute:ActivatedRoute){}
  gotoAnime(index){
    this.route.navigate([''+index],{relativeTo:this.activeRoute})
  }
  ngOnInit(){
    this.animes = this.animeService.getAllAnime();
  }
}