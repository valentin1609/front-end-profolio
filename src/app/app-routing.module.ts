import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';
import { ExperienceComponent } from './components/home/experience/experience.component';
import { HomeComponent } from './components/home/home/home.component';
import { ProfileComponent } from './components/home/profile/profile.component';
import { ProyectsComponent } from './components/home/proyects/proyects.component';
import { LoginComponent } from './components/login/login/login.component';
import { NewAccountComponent } from './components/login/new-account/new-account.component';
import { GuardGuard } from './services/guard.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'new-account', component: NewAccountComponent},
  {path: 'home', component: HomeComponent},
  {path: 'proyects', component: ProyectsComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'user-profile', component: ProfileComponent, canActivate:[GuardGuard]}, 
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
