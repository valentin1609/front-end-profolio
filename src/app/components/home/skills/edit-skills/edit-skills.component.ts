import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SkillsService } from 'src/app/services/skills.service';
import { Skills } from 'src/app/services/skillsModel';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css'],
})
export class EditSkillsComponent implements OnInit, OnDestroy {
  subs?: Subscription;

  form: FormGroup;

  constructor(
    private servSkills: SkillsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      nombre: [,Validators.required],
      nivel: [],
    });
  }
  //boton del formulario para añadir algo a la lista llamando a un metodo del servicio
  onSubmit(value: Skills): void {
    if (value.nivel == null) {
      value.nivel = 3;
    }
    this.addSkill(value);
    this.form.reset();
  }

  ngOnInit(): void {
    this.getSkills();

    //añado los servicios a subs para despues desuscribirme
    this.subs?.add(
      this.servSkills.getSkills().subscribe((data) => {
        this.skills = data;
      })
    );
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe;
  }

  skills: Skills[] = [];

  //metodos del servicio
  //get para crear una lista recorriendo el array skills
  getSkills(): void {
    this.servSkills.getSkills().subscribe((data) => {
      this.skills = data;
    });
  }

  //cuando cada uno termina su proceso llama al metodo get para aplicar los cambios en la lista
  addSkill(skill: Skills) {
    this.servSkills.addSkill(skill).subscribe(
      () => {
        this.getSkills();
      },
      (errors) => {
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

  deleteSkill(id: any) {
    this.servSkills.deleteSkill(id).subscribe(
      () => {
        this.getSkills();
      },
      (errors) => {
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
