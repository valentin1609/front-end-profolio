import { Component, OnInit } from '@angular/core';
import { EducationService } from 'src/app/services/education.service';
import { Education } from 'src/app/services/educationModel';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education : Education[] = [];

  constructor(private servEducation : EducationService) { }

  getEducationlist():void {
    this.servEducation.getEducationlist().subscribe(data => {
      this.education = data;
    })
  }


  ngOnInit(): void {
    this.getEducationlist();
  }

  mostrar = true;
  onEdit() {
    this.mostrar = !this.mostrar;
  }

}
