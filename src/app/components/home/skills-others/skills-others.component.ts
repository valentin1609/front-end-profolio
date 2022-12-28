import { Component, OnInit } from '@angular/core';
import { SkillsOthersService } from 'src/app/services/skills-others.service';
import { OtherSkill } from 'src/app/services/skills-othersModel';

@Component({
  selector: 'app-skills-others',
  templateUrl: './skills-others.component.html',
  styleUrls: ['./skills-others.component.css']
})
export class SkillsOthersComponent implements OnInit {

  constructor(private servOS:SkillsOthersService) { }

  ngOnInit(): void {
    this.getOtherSkills();
  }

  otherSkills : OtherSkill[] = [];

  getOtherSkills():void{
    this.servOS.getOtherSkills().subscribe(data => { 
      this.otherSkills = data;
    });
  }

}
