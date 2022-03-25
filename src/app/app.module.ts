import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AnimeComponent } from './anime/anime.component';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const approutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'anime', component:AnimeComponent},
  {path:'about', component:AboutComponent},
  {path:'help', component:HelpComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent}
]
@NgModule({
  imports:      [ BrowserModule, FormsModule,
    RouterModule.forRoot(approutes) ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, HomeComponent,AnimeComponent, HelpComponent, AboutComponent, LoginComponent, SignupComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
