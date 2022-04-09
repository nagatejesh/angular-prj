import { Component } from "@angular/core";
import { Anime } from "../anime.model";


@Component({
  selector:'app-anime',
  templateUrl:'./anime.component.html'
})

export class AnimeComponent{
  animes:Anime[]=[
    new Anime('Naruto',2,10,true),
    new Anime('Attack on Titan',2,10,false),
    new Anime('Wu Shen Zhu Zai',2,10,false),
    new Anime('Doupo Congqing',2,10,true)
  ]
}