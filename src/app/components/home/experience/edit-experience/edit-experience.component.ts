import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExperienceService } from 'src/app/services/experience.service';
import { Experience } from 'src/app/services/experienceModel';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css'],
})
export class EditExperienceComponent implements OnInit {
  form: FormGroup;

  editForm: FormGroup;

  constructor(
    private servExperience: ExperienceService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      nombre: [],
      empresa: [],
      descripcion: [],
      inicio: [],
      fin: [],
    });

    this.editForm = this.formBuilder.group({
      nombre: [],
      empresa: [],
      descripcion: [],
      inicio: [],
      fin: [],
    });
  }

  ngOnInit(): void {
    this.getExperiences();
  }

  onSubmit(value: Experience): void {
    this.addExperience(value);
    this.form.reset();
  }

  onSubEdit(value: Experience): void {
    value.id = this.idItem;
    this.editExperience(value)
  }

  mostrar: boolean = true;

  idItem?: number;
  onEditItem(id: any): void {
    this.idItem = id;
    this.mostrar = false;
  }

  onDelete(id: any): void {
    this.deleteExperience(id);
  }

  // // GET // //
  experiences: Experience[] = [];
  getExperiences(): void {
    this.servExperience.getExperiencelist().subscribe((data) => {
      this.experiences = data;
    });
  }

  // // EDIT // //
  editExperience(exp: Experience): void {
    this.servExperience.editExperience(exp).subscribe(() => {
      this.getExperiences();
      this.mostrar = true;
    });

    
  }

  // // POST // //
  addExperience(exp: Experience): void {
    this.servExperience.addExperience(exp).subscribe(() => {
      this.getExperiences();
    });
  }

  // // DELETE // //
  deleteExperience(id: number): void {
    this.servExperience.deleteExperience(id).subscribe(() => {
      this.getExperiences();
    });
  }
}
