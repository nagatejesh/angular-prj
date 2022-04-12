import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Anime } from "../../anime.model";
import { AnimeService } from "../../anime.service";

@Component({
  selector:'app-ani',
  templateUrl:'./ani.component.html',
  styleUrls:['./ani.component.css']
})
export class AniComponent implements OnInit{
  @Input() anime:Anime;

  constructor(private animeServive:AnimeService,
      private route:Router,
      private activeRoute:ActivatedRoute){}

  ngOnInit(){}
}