import { Component, OnInit } from "@angular/core";
import { LyricsService } from "../lyrics.service";


@Component({
  selector:'app-home',
  templateUrl:'./home.component.html'
})
export class HomeComponent implements OnInit{
  songs:string[];
  constructor(private lyService:LyricsService){}
  ngOnInit(){
    this.songs=this.lyService.getSongs();
  }
}