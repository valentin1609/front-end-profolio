import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InformationService } from 'src/app/services/information.service';
import { Information } from 'src/app/services/informationModel';

@Component({
  selector: 'app-edit-main',
  templateUrl: './edit-main.component.html',
  styleUrls: ['./edit-main.component.css']
})
export class EditMainComponent implements OnInit {
  @ViewChild("nombre") nombre : ElementRef;
  @ViewChild("apellido") apellido : ElementRef;
  @ViewChild("titulo") titulo : ElementRef;
  @ViewChild("presentacion") presentacion : ElementRef;

  form : FormGroup;
  info?: Information;
  @Output() save = new EventEmitter<any>();

  constructor(private servInformation : InformationService, private formBuilder : FormBuilder) {
     this.nombre = new ElementRef('input');
     this.apellido = new ElementRef('input');
     this.titulo = new ElementRef('input');
     this.presentacion = new ElementRef('textarea');

     this.form = this.formBuilder.group({
      nombre:[],
      apellido:[],
      titulo:[],
      presentacion:[]
     })
   }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    this.servInformation.getInformation().subscribe(data =>
      { 
        this.nombre.nativeElement.value = data.nombre;
        this.apellido.nativeElement.value = data.apellido;
        this.titulo.nativeElement.value = data.titulo;
        this.presentacion.nativeElement.value = data.presentacion;
      } );
  }



  onSave(value:Information){
      value.id = 1;
      value.foto = "";
      this.servInformation.editInformation(value).subscribe(
        (data) => {
              console.log(data)}, 
        (error) => {
              console.log(error)}
      );

      this.save.emit(true);
  }

}
