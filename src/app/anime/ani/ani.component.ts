import { Component, Input } from "@angular/core";
import { Anime } from "../../anime.model";

@Component({
  selector:'app-ani',
  templateUrl:'./ani.component.html',
  styleUrls:['./ani.component.css']
})
export class AniComponent{
  @Input() anime:Anime;
}