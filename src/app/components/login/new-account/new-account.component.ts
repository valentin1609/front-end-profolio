import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewUserService } from 'src/app/services/new-user.service';
import { User } from 'src/app/services/new-userModel';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private newUserService: NewUserService) {
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
        alert("saved user");
        this.router.navigateByUrl("/login");
      }, (errors) => {
        alert(errors.error.mensaje)
      }
    )
  }


}
