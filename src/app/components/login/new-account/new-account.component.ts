import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      ocupacion: [''],
      empresa: [''],
      username: ['', Validators.compose([Validators.required, Validators.minLength(3)]) ],
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

  enviar(values:any){
    console.log(values);
    this.router.navigateByUrl("/login");
  }



  get f (){return this.form.controls}




//  get Password(){
//   return this.form.get("password");
// }

// get Mail(){
//  return this.form.get("email");
// }

// get MailValid() {
//   return false
// }

// get PasswordValid(){
//   return this.Password?.touched && !this.Password?.valid;
// }




  // enviar(event: Event) {
  //   // Detenemos la propagación o ejecución del compotamiento
  //   //submit de un form
  //   event.preventDefault;
  //   if (this.form.valid) {
  //     // Llamamos a nuestro servicio para enviar los datos al
  //     // servidor
  //     // También podríamos ejecutar alguna lógica extra
  //     alert('Todo salio bien ¡Enviar formuario!');
  //     console.log(this.form.value)
  //   } else {
  //     // Corremos todas las validaciones para que se ejecuten los
  //     // mensajes de error en el template
  //     this.form.markAllAsTouched();
  //     console.log('fallaste');
  //   }
 
  // }

   //this.router.navigateByUrl("../viewemployee");
    //constructor(private router: Router) {}
}
