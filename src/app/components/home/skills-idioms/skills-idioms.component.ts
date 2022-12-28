import { Component, OnInit } from '@angular/core';
import { SkillsIdiomsService } from 'src/app/services/skills-idioms.service';
import { Idiom } from 'src/app/services/skills-idiomsModel';

@Component({
  selector: 'app-skills-idioms',
  templateUrl: './skills-idioms.component.html',
  styleUrls: ['./skills-idioms.component.css']
})
export class SkillsIdiomsComponent implements OnInit {



  constructor(private servIdioms:SkillsIdiomsService, ) { }



  ngOnInit(): void {
    this.getIdioms();
  }


  idioms : Idiom[] = [];

  getIdioms():void{
    this.servIdioms.getIdioms().subscribe(data => { 
      this.idioms = data;
      
    });
  }



}
