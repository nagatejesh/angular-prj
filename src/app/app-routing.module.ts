import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AnimeResolver } from './anime/anime-resolver.service';
import { AnimeComponent } from './anime/anime.component';
import { BiganiComponent } from './anime/bigani/bigani.component';
import { AuthGaurd } from './auth-gaurd.service';
import { CanDeactivateGaurd } from './can-deactivate-gaurd.service';
import { ErrorComponent } from './error/error.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { LyricsComponent } from './home/lyrics/lyrics.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const approutes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [{ path: ':song', component: LyricsComponent }],
  },
  {
    path: 'anime', canActivateChild:[AuthGaurd] , component: AnimeComponent,
    children: [{ path: ':index', component: BiganiComponent, resolve:{anime:AnimeResolver} }],
  },
  { path: 'about', component: AboutComponent },
  { path: 'help', component: HelpComponent },
  { path: 'login', component: LoginComponent ,canDeactivate:[CanDeactivateGaurd]},
  { path: 'signup', component: SignupComponent },
  // { path: 'notfound', component: ErrorComponent },
  { path: 'notfound', component: ErrorComponent ,data:{message:'Page not found'}},
  { path: '', redirectTo: 'home' ,pathMatch:'full' },
  { path: '**', redirectTo: 'notfound' },
];
@NgModule({
  // imports: [RouterModule.forRoot(approutes, {useHash:true})],
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
