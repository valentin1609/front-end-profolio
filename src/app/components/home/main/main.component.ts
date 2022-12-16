import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { InformationService } from 'src/app/services/information.service';
import { Information } from 'src/app/services/informationModel';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  perfil? : Information;
  constructor(private servInformation: InformationService) {
  }
  

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    this.servInformation.getInformation().subscribe(data =>
      { 
        this.perfil = data;
      } );
  }


  mostrar = true;
  onEdit(){
    this.mostrar = !this.mostrar; 
    console.log(this.mostrar)
  }


}
