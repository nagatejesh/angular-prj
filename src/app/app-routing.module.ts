import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AnimeComponent } from './anime/anime.component';
import { BiganiComponent } from './anime/bigani/bigani.component';
import { ErrorComponent } from './error.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const approutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'anime',
    component: AnimeComponent,
    children: [{ path: ':index', component: BiganiComponent }],
  },
  { path: 'about', component: AboutComponent },
  { path: 'help', component: HelpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'notfound', component: ErrorComponent },
  { path: '**', redirectTo: 'notfound' },
];
@NgModule({
  imports:[RouterModule.forRoot(approutes)],
  exports:[RouterModule]
})
export class AppRoutingModule {}
