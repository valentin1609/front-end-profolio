import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home/home.component';
import { HeaderComponent } from './components/home/header/header.component';
import { MainComponent } from './components/home/main/main.component';
import { LoginComponent } from './components/login/login/login.component';
import { Error404Component } from './components/error404/error404.component';
import { NewAccountComponent } from './components/login/new-account/new-account.component';
import { GetInComponent } from './components/login/get-in/get-in.component';
import { LoginHeaderComponent } from './components/login/login-header/login-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkillsComponent } from './components/home/skills/skills.component';
import { EducationComponent } from './components/home/education/education.component';
import { EditEducationComponent } from './components/home/education/edit-education/edit-education.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './components/home/footer/contact/contact.component';
import { EditMainComponent } from './components/home/main/edit-main/edit-main.component';
import { EditSkillsComponent } from './components/home/skills/edit-skills/edit-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MainComponent,
    LoginComponent,
    Error404Component,
    NewAccountComponent,
    GetInComponent,
    LoginHeaderComponent,
    SkillsComponent,
    EducationComponent,
    EditEducationComponent,
    FooterComponent,
    ContactComponent,
    EditMainComponent,
    EditSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
