import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProyectsService } from 'src/app/services/proyects.service';
import { Proyect } from 'src/app/services/proyectsModel';

@Component({
  selector: 'app-edit-proyects',
  templateUrl: './edit-proyects.component.html',
  styleUrls: ['./edit-proyects.component.css'],
})
export class EditProyectsComponent implements OnInit {
  form: FormGroup;

  constructor(
    private servProyects: ProyectsService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      nombre: [],
      descripcion: [],
      url: []
    });
  }

  onSubmit(value: Proyect): void {
    this.addProyect(value);
    this.form.reset();
  }

  ngOnInit(): void {
    this.getProyects();
  }

  proyects: Proyect[] = [];

  getProyects(): void {
    this.servProyects.getProyects().subscribe((data) => {
      this.proyects = data;
    });
  }

  addProyect(value: Proyect): void {
    this.servProyects.addProyect(value).subscribe(
      () => {
      this.getProyects();
    });
  }

  deleteProyect(id: any): void {
    this.servProyects.deleteProyect(id).subscribe(() => {
      this.getProyects();
    });
  }
}
