import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-get-in',
  templateUrl: './get-in.component.html',
  styleUrls: ['./get-in.component.css']
})
export class GetInComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService:AuthService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onLogin(event:Event){
    event.preventDefault; //cortamos el flujo normal del evento
    this.authService.login(this.loginForm.value).subscribe( () => {

    console.log(this.authService.UsuarioAutenticado.authorities);
    //y si todo esta bien redirige al porfolio
      this.router.navigateByUrl("/home")
    }, (error) => {
      console.log(error)
    }
    )

  }

  ngOnInit(): void {
  }

}
