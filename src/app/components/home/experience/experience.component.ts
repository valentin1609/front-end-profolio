import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth-service.service';
import { ExperienceService } from 'src/app/services/experience.service';
import { Experience } from 'src/app/services/experienceModel';
import { InformationService } from 'src/app/services/information.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit, OnDestroy {
  isUser: boolean = false;
  isAdmin: boolean = false;
  isGuest: boolean = false;



  recibirDato(mje: string): void {
    if (mje === 'user') {
      this.isUser = !this.isUser;
      this.isAdmin = false;
      this.isGuest = false;
    }
    if (mje === 'admin') {
      this.isAdmin = !this.isAdmin;
      this.isUser = false;
      this.isGuest = false;
    }
    if (mje === 'guest') {
      this.isGuest = !this.isGuest;
      this.isUser = false;
      this.isAdmin = false;
    }
  }

  loading: boolean = true;

  edit?: boolean;

  private subs?: Subscription;

  constructor(
    private authService: AuthService,
    private infoServ: InformationService,
    private router: Router,
    private servExperience: ExperienceService
  ) {
    this.infoServ.getInformation().subscribe(
      () => {
        this.loading = false;
      },
      (errors) => {
        if (errors.status == 0) {
          Swal.fire('unknown error', 'please try later', 'question');
        }
        this.router.navigateByUrl('/');
      }
    );
  }

  ngOnInit(): void {
    this.getExperiences();


    let userAuth = JSON.parse(sessionStorage.getItem('user') || '{}');
    if (userAuth.authorities) {
      if (userAuth.authorities.length == 2) {
        this.edit = true;
      }
    } else {
      this.edit = false;
    }
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }

  mostrar = true;
  onEdit() {
    this.mostrar = !this.mostrar;

    // si se muestra el edit: me desuscribo del servicio
    if (this.mostrar == false) {
      this.ngOnDestroy();
    }
    //si se vuelve al presionar el boton me resuscribo al servicio
    if (this.mostrar == true) {
      this.ngOnInit();
    }
  }

  onlogOut(): void {
    this.authService.logOut();
  }

  // // // // // // // // //
  experiences: Experience[] = [];
  getExperiences(): void {
    this.servExperience.getExperiencelist().subscribe((data) => {
      this.experiences = data;
    });

    this.subs?.add(
      this.servExperience.getExperiencelist().subscribe((data) => {
        this.experiences = data;
      })
    )
  }

  
}
