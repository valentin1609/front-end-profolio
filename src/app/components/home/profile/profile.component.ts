import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';
import { PerfilService } from 'src/app/services/perfil.service';
import { Perfil } from 'src/app/services/perfilModel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private perfilserv: PerfilService,
    private authService: AuthService,
    private router: Router
  ) {}

  perfil?: Perfil;

  ngOnInit(): void {
    let userAuth = JSON.parse(sessionStorage.getItem('user') || '{}');
    this.getPerfil(userAuth.username);
  }

  getPerfil(username: string): void {
    this.perfilserv.getPerfil(username).subscribe(
      (data) => {
        this.perfil = data;
      },
      () => {
        this.router.navigateByUrl('/');
      }
    );
  }

  onlogOut(): void {
    this.authService.logOut();
  }
}
