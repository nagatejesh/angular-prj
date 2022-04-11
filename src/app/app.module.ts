import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AnimeComponent } from './anime/anime.component';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AniComponent } from './anime/ani/ani.component';
import { ErrorComponent } from './error.component';
import { OpenDirective } from './open.directive';


const approutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'anime', component:AnimeComponent},
  {path:'anime/:index', component:AniComponent},
  {path:'about', component:AboutComponent},
  {path:'help', component:HelpComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'**', component:ErrorComponent}
]
@NgModule({
  imports:      [ BrowserModule, FormsModule,
    RouterModule.forRoot(approutes) ],
  declarations: [ AppComponent, AniComponent, HeaderComponent, HomeComponent,AnimeComponent, HelpComponent, AboutComponent, LoginComponent, SignupComponent, ErrorComponent, OpenDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
