import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SkillsIdiomsService } from 'src/app/services/skills-idioms.service';
import { Idiom } from 'src/app/services/skills-idiomsModel';

@Component({
  selector: 'app-skills-idioms',
  templateUrl: './skills-idioms.component.html',
  styleUrls: ['./skills-idioms.component.css']
})
export class SkillsIdiomsComponent implements OnInit, OnDestroy {

  private subs?: Subscription;

  constructor(private servIdioms:SkillsIdiomsService, ) { }



  ngOnInit(): void {
    this.getIdioms();
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }


  idioms : Idiom[] = [];

  getIdioms():void{
    this.servIdioms.getIdioms().subscribe(data => { 
      this.idioms = data;
      
    });

    this.subs?.add(
      this.servIdioms.getIdioms().subscribe(data => { 
        this.idioms = data;
        
      })
    )
  }



}
