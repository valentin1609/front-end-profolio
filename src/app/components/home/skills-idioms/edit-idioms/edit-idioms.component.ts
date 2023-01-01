import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SkillsIdiomsService } from 'src/app/services/skills-idioms.service';
import { Idiom } from 'src/app/services/skills-idiomsModel';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-idioms',
  templateUrl: './edit-idioms.component.html',
  styleUrls: ['./edit-idioms.component.css']
})
export class EditIdiomsComponent implements OnInit {

  form : FormGroup;

  constructor(private servIdioms:SkillsIdiomsService, private formBuilder : FormBuilder, private router:Router) {
    this.form = this.formBuilder.group({
      nombre: [,Validators.required],
      nivel:[,Validators.required]
      })
   }

  ngOnInit(): void {
    this.getIdioms();
  }

  onSubmit(value: Idiom) : void{
    this.addIdiom(value);
    this.form.reset();
  }

  idioms : Idiom[] = [];

  getIdioms():void{
    this.servIdioms.getIdioms().subscribe(data => { 
      this.idioms = data;
      
    });
  }

  deleteIdiom(id:any): void{
    this.servIdioms.deleteIdiom(id).subscribe( () => {
      this.getIdioms();
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
    )
  }

  addIdiom(idiom : Idiom) {
    this.servIdioms.addIdiom(idiom).subscribe(
      ()=>{
        this.getIdioms();
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
