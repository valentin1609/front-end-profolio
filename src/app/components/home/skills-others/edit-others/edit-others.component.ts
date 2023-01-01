import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SkillsOthersService } from 'src/app/services/skills-others.service';
import { OtherSkill } from 'src/app/services/skills-othersModel';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-others',
  templateUrl: './edit-others.component.html',
  styleUrls: ['./edit-others.component.css']
})
export class EditOthersComponent implements OnInit {

  form : FormGroup;

  constructor(private servOS:SkillsOthersService, private formBuilder : FormBuilder, private router:Router) {
    this.form = this.formBuilder.group({
      nombre: [,Validators.required]
      })
  }

  onSubmit(value:OtherSkill): void {
    this.addOtherSkill(value);
    this.form.reset();
  } 

  ngOnInit(): void {
    this.getOtherSkills();
  }

  otherSkills : OtherSkill[] = [];

  getOtherSkills():void{
    this.servOS.getOtherSkills().subscribe(data => { 
      this.otherSkills = data;
    });
  }

  deleteOtherSkill(id:any){
    this.servOS.deleteOtherSkill(id).subscribe(
      () => {
        this.getOtherSkills();
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

  addOtherSkill(skill : OtherSkill) {
    this.servOS.addOtherSkill(skill).subscribe(
      ()=>{
        this.getOtherSkills();
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
