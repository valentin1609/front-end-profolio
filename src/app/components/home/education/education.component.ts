import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EducationService } from 'src/app/services/education.service';
import { Education } from 'src/app/services/educationModel';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit, OnDestroy{

  subs? : Subscription;

  education : Education[] = [];

  constructor(private servEducation : EducationService) { }

  ngOnInit(): void {
    this.getEducationlist();
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }

  getEducationlist():void {
    this.servEducation.getEducationlist().subscribe(data => {
      this.education = data;
    })

    this.subs?.add(
      this.servEducation.getEducationlist().subscribe(data => {
        this.education = data;
      })
    )
  }


  mostrar = true;
  onEdit() {
    this.mostrar = !this.mostrar;
    if(this.mostrar == false){
      this.ngOnDestroy();
    }
    if(this.mostrar == true){
      this.ngOnInit();
    }
    
  }

}
