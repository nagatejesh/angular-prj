import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Anime } from "../anime.model";
import { AnimeService } from "../anime.service";

@Injectable({
  providedIn:'root'
})
export class AnimeResolver implements Resolve<Anime>{
  constructor(private animeService:AnimeService){}
  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<Anime>|Promise<Anime>|Anime{
    return this.animeService.getAnimeByIndex(+route.params['index']);
  }
}