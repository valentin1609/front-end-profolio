import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EducationService } from 'src/app/services/education.service';
import { Education } from 'src/app/services/educationModel';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css'],
})
export class EditEducationComponent implements OnInit {
  @ViewChild('nombre') nombre: ElementRef;
  @ViewChild('apellido') instituto: ElementRef;
  @ViewChild('titulo') fin: ElementRef;

  education: Education[] = [];

  form: FormGroup;

  constructor(
    private servEducation: EducationService,
    private formBuilder: FormBuilder
  ) {
    this.nombre = new ElementRef('input');
    this.instituto = new ElementRef('input');
    this.fin = new ElementRef('input');

    this.form = this.formBuilder.group({
      nombre: [],
      instituto: [],
      fin: [],
    });
  }

  ngOnInit(): void {
    this.getEducationlist();
  }

  mostrar = true;
  onAdd() {
    this.mostrar = !this.mostrar;
  }
  onSave(form: any) {
    this.addEducation(form);
    this.onAdd();
  }

  onDelete(id: any) {
    this.deleteEducation(id);
  }

  //get services
  getEducationlist(): void {
    this.servEducation.getEducationlist().subscribe((data) => {
      this.education = data;
    });
  }
  //post services
  addEducation(education: Education) {
    this.servEducation.addEducation(education).subscribe(() => {
      this.getEducationlist();
    });
  }

  //delete services
  deleteEducation(id: any): void {
    this.servEducation.deleteEducation(id).subscribe(() => {
      this.getEducationlist();
    });
  }
}
