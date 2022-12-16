import { Component, OnInit } from '@angular/core';
import { ɵNgNoValidate } from '@angular/forms';
import { SkillsService } from 'src/app/services/skills.service';
import { Skills } from 'src/app/services/skillsModel';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {

  skills : Skills[] = [];

  constructor(private servSkills:SkillsService) {}

  ngOnInit(): void {

    this.getSkills();
    
  }

 

  getSkills():void{
    this.servSkills.getSkills().subscribe(data => { 
      this.skills = data;
    });
  }


  
  mostrar = true;
  onEdit() {
    this.mostrar = !this.mostrar;
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