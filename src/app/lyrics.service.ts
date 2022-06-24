import { Injectable } from "@angular/core";
import { Lyrics } from "./lyrics.model";

@Injectable({
  providedIn:'root'
})
export class LyricsService{

  lyricsList:Lyrics[]=[
    {title:'Darshana',singers:['Hesham Abdul Wahab','Darshana Rajendran'],
        lyrics:[
          {type:'Male',part:`Ninne Njaan..<br/>
          Kandenne..<br/>
          Megham Pookkal Peyyunne..<br/>
          Onnaavaan Njanenne..<br/>
          Nenjil Theerthoren..<br/>
          Pranaya Prapanchamitha..<br/>
          <br/>
          Darshana<br/>
          Sarvam Sada Nin Sourabhyam<br/>
          Darshana<br/>
          En Jeevan Saayoojyam<br/>
          Darshana<br/>
          Snehaamrutham Ennileku, Darshana..<br/>
          <br/>
          Nee Pokum Vazhiyil<br/>
          Varam Kaathu Ninnu<br/>
          Oru Nokku Nalkaathakannu Nee<br/>
          <br/>
          Orkkunna Neram<br/>
          Kanalaanu Nenjil<br/>
          Maruvaakku Chollaathathenthe..<br/>
          <br/>
          Ethorazhathil<br/>
          Moodi Vachaalum Azhake<br/>
          Manasu Thediyethunnu<br/>
          Ninte Ee Punchiri<br/>
          Neeyaam Madhuve<br/>
          Nukaraan Kaathu Njan<br/>
          <br/>
          Darshana<br/>
          Sarvam Sada Nin Sourabhyam<br/>
          Darshana<br/>
          En Jeevan Saayoojyam<br/>
          Darshana<br/>
          Snehaamrutham Ennileku, Darshana..<br/>
          <br/>
          Onnaavaan<br/>
          Njanenne<br/>
          Nenjil Theerthoren<br/>
          Pranaya Prapanchamitha..<br/>
          <br/>
          Darshana<br/>
          Sarvam Sada Nin Sourabhyam<br/>
          Darshana<br/>
          En Jeevan Saayoojyam<br/>
          Darshana<br/>
          Snehaamrutham Ennileku, Darshana..<br/>
          <br/>
          Darshana… Darshana<br/>
          Darshana<br/>
          Snehaamrutham Ennilekoo<br/>
          Darshana..<br/>`}
        ]},
    {title:'Mudhal Nee Mudivum nee',singers:['Sid Sriram','Darbuka Siva'],
        lyrics:[
          {type:'Male',part:`Aaa….aaa….aa….aa…`},
          {type:'Chorus',part:`Hooo oo hoo oo hoo oo hoo oo
          Hooo oo hoo oo hoo oo hoo oo`},
          {type:'Male',part:`Aaa….aaa….aa….aa…`},
          {type:'Chorus',part:`Hooo oo hoo oo hoo oo hoo oo
          Hooo oo hoo oo hoo oo hoo oo`},
          {type:'Male',part:`Aaa….aaa….aa….aa…`},
          {type:'Male',part:`Mudhal nee mudivum nee<br/>
          Moondru kaalam nee<br/>
          Kadal nee karaiyum nee<br/>
          Kaatru kooda nee<br/>

          Manadhoram oru kaayam<br/>
          Unnai ennadha naal illaiyae<br/>
          Naanaga naanum illaiyae<br/>

          Vazhiyengum pala bimbam<br/>
          Adhil naan saaya thozh illaiyae<br/>
          Un pola yaarum illaiyae<br/>`},
          {type:'Males',part:`Theera nadhi neethaanadi<br/>
          Neendhaamal naan moozhgi ponen<br/>
          Neethaanadi vaanil madhi<br/>
          Neeyalla naan thaanae theindhen<br/>`},
          {type:'Male',part:` Paadhi kaanagam<br/>
          Adhil kaanamal ponavan<br/>
          Oru paavai kaal thadam<br/>
          Adhai thedamal theinthavan<br/>
          
          Kaanadha baaram en nenjilae<br/>
          Thunai illa naan andrilae<br/>
          Naal ellaam pogum aanalum naan<br/>`},
          {type:'Males',part:`Uyir illadha udalae<br/>`},
          {type:'Chorus',part:`Hooo oo hoo oo hoo oo hoo oo<br/>
          Hooo oo hoo oo hoo oo hoo oo<br/>`},
          {type:'Male',part:`Aaa….aaa….aa….aa…<br/>`},
          {type:'Chorus',part:`Hooo oo hoo oo hoo oo hoo oo<br/>
          Hooo oo hoo oo hoo oo hoo oo<br/>`},
          {type:'Male',part:`Aaa….aaa….aa….aa…<br/>`},
          {type:'Male',part:`Mudhal nee mudivum nee<br/>
          Moondru kaalam nee<br/>
          Kadal nee karaiyum nee<br/>
          Kaatru kooda nee<br/>

          Dhoora desathil thozhainthaayo
          Kanmani<br/>
          Unai thedi kandathum<br/>
          En kannellaam minnmini<br/>

          Pinnokki kaalam pogum enil<br/>
          Un mannippai kooruven<br/>
          Kannokki nerai paarkkum kanam<br/>`},
          {type:'Males',part:`Pizhai ellaamae kalaiven<br/>`},
          {type:'Chorus',part:`Hooo oo hoo oo hoo oo hoo oo<br/>
          Hooo oo hoo oo hoo oo hoo oo<br/>`},
          {type:'Male',part:`Aaa….aaa….aa….aa…<br/>`},
          {type:'Chorus',part:`Hooo oo hoo oo hoo oo hoo oo<br/>
          Hooo oo hoo oo hoo oo hoo oo<br/>`},
          {type:'Male',part:`Aaa….aaa….aa….aa…<br/>`},
          {type:'Male',part:`Mudhal nee mudivum nee<br/>
          Moondru kaalam nee<br/>
          Kadal nee karaiyum nee<br/>
          Kaatru kooda nee<br/>

          Nagaradha kadigaaram<br/>
          Adhu pol naanum nindrirundhen<br/>
          Nee engu sendraai kannamma<br/>
          Azhagaana aridhaaram<br/>
          Velipaarvaikku poosi konden<br/>
          Punnaigaikku podhum kannamma<br/>`},
          {type:'Males',part:`Nee ketkavae en padalai<br/>
          Un aasai raagathil seidhen<br/>
          Un punnagai pon minnalai<br/>
          Naan korthu aangaangu neidhen<br/>`},
          {type:'Male',part:`Mudhal nee…eee…..<br/>
          Mudivum nee…ee…ee…<br/>`}
        ]}
  ];


  getSongs(){
    var songs:string[]=[];
    this.lyricsList.forEach((song)=>{
      songs.push(song.title)
    });
    return songs;
  }
  getSongByTitle(title:string):Lyrics{
    return this.lyricsList[this.getSongs().indexOf(title)]
  }
}