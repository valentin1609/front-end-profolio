import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SkillsService } from 'src/app/services/skills.service';
import { Skills } from 'src/app/services/skillsModel';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit {

form : FormGroup;

  constructor(private servSkills : SkillsService, private formBuilder : FormBuilder) {
    this.form = this.formBuilder.group({
    nombre: [],
    nivel:[]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(value:Skills): void {
    console.log(value);
    this.addSkill(value);
  }

  addSkill(skill : Skills) {
    this.servSkills.addSkill(skill).subscribe();
  }

  editSkill(skill : Skills){
    this.servSkills.editSkill(skill).subscribe();
  }
  deleteSkill(id:number){
    this.servSkills.deleteSkill(id).subscribe();
  }

}
