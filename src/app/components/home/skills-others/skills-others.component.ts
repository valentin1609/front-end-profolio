import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SkillsOthersService } from 'src/app/services/skills-others.service';
import { OtherSkill } from 'src/app/services/skills-othersModel';

@Component({
  selector: 'app-skills-others',
  templateUrl: './skills-others.component.html',
  styleUrls: ['./skills-others.component.css']
})
export class SkillsOthersComponent implements OnInit, OnDestroy {

  private subs?: Subscription;

  constructor(private servOS:SkillsOthersService) { }

  ngOnInit(): void {
    this.getOtherSkills();
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }

  otherSkills : OtherSkill[] = [];

  getOtherSkills():void{
    this.servOS.getOtherSkills().subscribe(data => { 
      this.otherSkills = data;
    });

    this.subs?.add(
      this.servOS.getOtherSkills().subscribe(data => { 
        this.otherSkills = data;
      })
    )
  }

}
