import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SkillsService } from 'src/app/services/skills.service';
import { Skills } from 'src/app/services/skillsModel';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit, OnDestroy {

  skills : Skills[] = [];

  constructor(private servSkills:SkillsService) {}

  edit? : boolean;

  loading : boolean = true;

  private subs? : Subscription;

  ngOnInit(): void {
    this.getSkills();

    let userAuth = JSON.parse( sessionStorage.getItem('user') || '{}' );
    if (userAuth.authorities) {
      if (userAuth.authorities.length == 2) {this.edit = true}
    } 
    else {this.edit = false}
  }
  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }

 
  getSkills():void{
    this.servSkills.getSkills().subscribe(data => { 
      this.skills = data;
      this.loading = false;
    });

    this.subs?.add(
      this.servSkills.getSkills().subscribe(data => { 
        this.skills = data;
      })
    )
  }


  mostrar = true;
  onEdit() {
    this.mostrar = !this.mostrar;
    if(this.mostrar == true){
      this.ngOnInit();
    }
  }

  getNivel(skill : Skills):any{
    if(skill.nivel == 1) 
    return  '25%' ; 
    if(skill.nivel == 2) 
    return  '50%' ; 
    if(skill.nivel == 3) 
    return  '75%' ; 
    if(skill.nivel == 4) 
    return  '100%' ; 
  } 

  nivelObtenido(skill : Skills):any{
    if(skill.nivel == 1) 
    return  'Junior' ; 
    if(skill.nivel == 2) 
    return  'Intermediate' ; 
    if(skill.nivel == 3) 
    return  'Advanced' ; 
    if(skill.nivel == 4) 
    return  'Expert' ; 
  }
}
