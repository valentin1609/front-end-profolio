import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth-service.service';
import { InformationService } from 'src/app/services/information.service';
import { Information } from 'src/app/services/informationModel';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  perfilimg = "./../../../../assets/images/perfil.jpg"

  private subs? : Subscription;

  perfil? : Information;
  constructor(private servInformation: InformationService, private authService: AuthService) {
  }
  

  ngOnInit(): void {
   this.getInfo();   //llamo al servicio
   //añado el servico a mis suscripciones:
   this.subs?.add(
    this.servInformation.getInformation().subscribe(data =>
      { 
        this.perfil = data;
      } )
    );

  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe;
  }

  getInfo() {
    this.servInformation.getInformation().subscribe(data =>
      { 
        this.perfil = data;
      } )
  }


  mostrar = true;
  onEdit(){
    // boton de ocultar y mostrar el main o el edit-main
    this.mostrar = !this.mostrar; 

    // si se muestra el edit main: me desuscribo del servicio
    if(this.mostrar == false){
    this.ngOnDestroy()
    }
    //si se vuelve al presionar el boton me resuscribo al servicio
    if(this.mostrar == true){
      this.ngOnInit()
    }
  }

  //aca recibo el evento desde el componente hijo
  onSave(save:boolean){  
  //cuando presiono save en el edit-component se va resuscribir al servicio para que se actualice la informacion
    this.ngOnInit();
    this.mostrar = save;
  }


}
