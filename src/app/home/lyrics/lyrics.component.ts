import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Lyrics } from "../../lyrics.model";
import { LyricsService } from "../../lyrics.service";


@Component({
  selector:'app-lyrics',
  templateUrl:'./lyrics.component.html'
})

export class LyricsComponent implements OnInit{

  lyrics:Lyrics;
  constructor(private lyService:LyricsService,
      private route:ActivatedRoute,
      private router:Router){}
  ngOnInit(){
    var song=this.route.snapshot.params['song'];
    this.lyrics=this.lyService.getSongByTitle(song);
    this.route.params.subscribe(
      (param:Params)=>{
        var song=param['song'];
        this.lyrics=this.lyService.getSongByTitle(song);
      }
    )
  }
}