import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading : boolean = true;

  constructor() {
    //para darle tiempo de cargar al fondo
    setTimeout(() => {
      this.loading = false;
    }, 500);
   }

  

  ngOnInit(): void {

  }

}
