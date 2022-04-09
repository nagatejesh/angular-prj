export class Anime{
  name:string;
  seasons:number;
  episodes:number;
  watched:boolean;

  constructor(name:string,seasons:number,episodes:number,watched:boolean){
    this.name=name;
    this.seasons=seasons;
    this.episodes=episodes;
    this.watched=watched;
  }
}