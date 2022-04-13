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
          {type:'Male',part:`Mudhal nee mudivum nee
          Moondru kaalam nee
          Kadal nee karaiyum nee
          Kaatru kooda nee

          Manadhoram oru kaayam
          Unnai ennadha naal illaiyae
          Naanaga naanum illaiyae

          Vazhiyengum pala bimbam
          Adhil naan saaya thozh illaiyae
          Un pola yaarum illaiyae`},
          {type:'Males',part:`Theera nadhi neethaanadi
          Neendhaamal naan moozhgi ponen
          Neethaanadi vaanil madhi
          Neeyalla naan thaanae theindhen`},
          {type:'Male',part:` Paadhi kaanagam
          Adhil kaanamal ponavan
          Oru paavai kaal thadam
          Adhai thedamal theinthavan
          
          Kaanadha baaram en nenjilae
          Thunai illa naan andrilae
          Naal ellaam pogum aanalum naan`},
          {type:'Males',part:`Uyir illadha udalae`},
          {type:'Chorus',part:`Hooo oo hoo oo hoo oo hoo oo
          Hooo oo hoo oo hoo oo hoo oo`},
          {type:'Male',part:`Aaa….aaa….aa….aa…`},
          {type:'Chorus',part:`Hooo oo hoo oo hoo oo hoo oo
          Hooo oo hoo oo hoo oo hoo oo`},
          {type:'Male',part:`Aaa….aaa….aa….aa…`},
          {type:'Male',part:`Mudhal nee mudivum nee
          Moondru kaalam nee
          Kadal nee karaiyum nee
          Kaatru kooda nee

          Dhoora desathil thozhainthaayo
          Kanmani
          Unai thedi kandathum
          En kannellaam minnmini

          Pinnokki kaalam pogum enil
          Un mannippai kooruven
          Kannokki nerai paarkkum kanam`},
          {type:'Males',part:`Pizhai ellaamae kalaiven`},
          {type:'Chorus',part:`Hooo oo hoo oo hoo oo hoo oo
          Hooo oo hoo oo hoo oo hoo oo`},
          {type:'Male',part:`Aaa….aaa….aa….aa…`},
          {type:'Chorus',part:`Hooo oo hoo oo hoo oo hoo oo
          Hooo oo hoo oo hoo oo hoo oo`},
          {type:'Male',part:`Aaa….aaa….aa….aa…`},
          {type:'Male',part:`Mudhal nee mudivum nee
          Moondru kaalam nee
          Kadal nee karaiyum nee
          Kaatru kooda nee

          Nagaradha kadigaaram
          Adhu pol naanum nindrirundhen
          Nee engu sendraai kannamma
          Azhagaana aridhaaram
          Velipaarvaikku poosi konden
          Punnaigaikku podhum kannamma`},
          {type:'Males',part:`Nee ketkavae en padalai
          Un aasai raagathil seidhen
          Un punnagai pon minnalai
          Naan korthu aangaangu neidhen`},
          {type:'Male',part:`Mudhal nee…eee…..
          Mudivum nee…ee…ee…`}
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