import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AnimeComponent } from './anime/anime.component';


const approutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'anime', component:AnimeComponent}
]
@NgModule({
  imports:      [ BrowserModule, FormsModule,
    RouterModule.forRoot(approutes) ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, HomeComponent,AnimeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
