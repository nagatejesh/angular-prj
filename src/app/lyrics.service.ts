import { Lyrics } from "./lyrics.model";

export class LyricsService{

  lyricsList:Lyrics[]=[
    {title:'Darshana',singers:['Hesham Abdul Wahab','Darshana Rajendran'],
        lyrics:[
          {type:'Male',part:`Ninne Njaan..
          Kandenne..
          Megham Pookkal Peyyunne..
          Onnaavaan Njanenne..
          Nenjil Theerthoren..
          Pranaya Prapanchamitha..

          Darshana
          Sarvam Sada Nin Sourabhyam
          Darshana
          En Jeevan Saayoojyam
          Darshana
          Snehaamrutham Ennileku, Darshana..

          Nee Pokum Vazhiyil
          Varam Kaathu Ninnu
          Oru Nokku Nalkaathakannu Nee

          Orkkunna Neram
          Kanalaanu Nenjil
          Maruvaakku Chollaathathenthe..

          Ethorazhathil
          Moodi Vachaalum Azhake
          Manasu Thediyethunnu
          Ninte Ee Punchiri
          Neeyaam Madhuve
          Nukaraan Kaathu Njan

          Darshana
          Sarvam Sada Nin Sourabhyam
          Darshana
          En Jeevan Saayoojyam
          Darshana
          Snehaamrutham Ennileku, Darshana..

          Onnaavaan
          Njanenne
          Nenjil Theerthoren
          Pranaya Prapanchamitha..

          Darshana
          Sarvam Sada Nin Sourabhyam
          Darshana
          En Jeevan Saayoojyam
          Darshana
          Snehaamrutham Ennileku, Darshana..

          Darshana… Darshana
          Darshana
          Snehaamrutham Ennilekoo
          Darshana..`}
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
    var songs:string[]
    this.lyricsList.forEach((song)=>{
      songs.push(song.title)
    });
    return songs;
  }
  getSongByTitle(title:string):Lyrics{
    return this.lyricsList[this.getSongs().indexOf(title)]
  }
}