import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AnimeComponent } from './anime/anime.component';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AniComponent } from './anime/ani/ani.component';
import { ErrorComponent } from './error/error.component';
import { OpenDirective } from './open.directive';
import { BiganiComponent } from './anime/bigani/bigani.component';
import { AppRoutingModule } from './app-routing.module';
import { LyricsComponent } from './home/lyrics/lyrics.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    AniComponent,
    HeaderComponent,
    HomeComponent,
    AnimeComponent,
    HelpComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    ErrorComponent,
    OpenDirective,
    BiganiComponent,
    LyricsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
