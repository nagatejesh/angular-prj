import { Component } from "@angular/core";
import { Anime } from "../anime.model";


@Component({
  selector:'app-anime',
  templateUrl:'./anime.component.html'
})

export class AnimeComponent{
  animes:Anime[]=[
    {name:'Naruto',seasons:2,episodes:10,watched:true},
    {name:'Attack on Titan',seasons:2,episodes:10,watched:false},
    {name:'Wu Shen Zhu Zai',seasons:2,episodes:10,watched:false},
    {name:'Doupo Congqing',seasons:2,episodes:10,watched:true}
  ]
}