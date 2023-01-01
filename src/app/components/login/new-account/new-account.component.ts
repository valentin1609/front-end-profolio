import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewUserService } from 'src/app/services/new-user.service';
import { User } from 'src/app/services/new-userModel';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent implements OnInit {
  form: FormGroup;

  loading : boolean = true;





  constructor(private formBuilder: FormBuilder, private router: Router, private newUserService: NewUserService) {
    setTimeout(() => {
      this.loading = false;
    }, 500);
    
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      ocupacion: [''],
      empresa: [''],
      username: ['', Validators.required ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      cpassword: ['', Validators.required],
    })
  }

  passwordValue?: string;
  cpasswordValue?: string;
  matchingControl?: boolean;

  ngOnInit(): void {

    // validacion para que coincidan las contraseñas
    this.form.get('password')?.valueChanges
    .subscribe(value => {
      this.passwordValue = value;
      if(this.cpasswordValue === this.passwordValue){
        this.matchingControl = true;
      } else{
        this.matchingControl = false;
      }
    })

    this.form.get('cpassword')?.valueChanges
    .subscribe(value => {
      this.cpasswordValue = value

      if(this.cpasswordValue === this.passwordValue){
        this.matchingControl = true;
      } else{
        this.matchingControl = false;
      }
    })
    // // // // // // // // // // // // // // // // // //
  }

  enviar(values:User){
    this.newUserService.addUser(values).subscribe(
      () => {

        Swal.fire(
          'saved user',
          '',
          'success'
        )
        this.router.navigateByUrl("/login");
      }, (errors) => {
        if(errors.status == 0){
          Swal.fire(
            'unknown error',
            'please try later',
            'question'
          )
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: errors.error.mensaje
          })
        }

      }
    )
  }


}
