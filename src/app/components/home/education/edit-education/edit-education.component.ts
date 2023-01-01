import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EducationService } from 'src/app/services/education.service';
import { Education } from 'src/app/services/educationModel';
import Swal from 'sweetalert2';

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
    private formBuilder: FormBuilder, private router: Router
  ) {
    this.nombre = new ElementRef('input');
    this.instituto = new ElementRef('input');
    this.fin = new ElementRef('input');

    this.form = this.formBuilder.group({
      nombre: [,Validators.required],
      instituto: [,Validators.required],
      fin: [,Validators.required],
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
    this.form.reset();
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
    }, (errors) => {
      console.log(errors);
      if (errors.status == 401) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'your session has expired, please login again'
        })
        this.router.navigateByUrl('/');
      }
    });
  }

  //delete services
  deleteEducation(id: any): void {
    this.servEducation.deleteEducation(id).subscribe(() => {
      this.getEducationlist();
    }, (errors) => {
      console.log(errors);
      if (errors.status == 401) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'your session has expired, please login again'
        })
        this.router.navigateByUrl('/');
      }
    }
    );
  }
}
