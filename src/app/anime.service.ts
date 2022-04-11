import { Injectable } from "@angular/core";
import { Anime } from "./anime.model";

@Injectable({
  providedIn:'root'
})
export class AnimeService{
  animes:Anime[]=[
    new Anime('Naruto',2,10,true),
    new Anime('Attack on Titan',2,10,false),
    new Anime('Wu Shen Zhu Zai',2,10,false),
    new Anime('Doupo Congqing',2,10,true)
  ]

  getAllAnime():Anime[]{
    return this.animes.slice();
  }

  getAnimeByIndex(index:number):Anime{
    if(index>this.animes.length)
      return null;
    return this.animes[index];
  }
  
  deleteAnimeByIndex(index:number):Anime[]{
    return this.animes.splice(index,1);
  }
}