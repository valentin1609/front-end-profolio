import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { InformationService } from 'src/app/services/information.service';
import { Information } from 'src/app/services/informationModel';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-main',
  templateUrl: './edit-main.component.html',
  styleUrls: ['./edit-main.component.css'],
})
export class EditMainComponent implements OnInit {
  @ViewChild('nombre') nombre: ElementRef;
  @ViewChild('apellido') apellido: ElementRef;
  @ViewChild('titulo') titulo: ElementRef;
  @ViewChild('presentacion') presentacion: ElementRef;
  @ViewChild('foto') foto: ElementRef;

  perfilimg?: string;
  // https://i.ibb.co/MnQ8v1n/perfil.jpg

  form: FormGroup;
  info?: Information;
  @Output() save = new EventEmitter<any>();

  constructor(
    private servInformation: InformationService,
    private formBuilder: FormBuilder, private router: Router
  ) {
    this.nombre = new ElementRef('input');
    this.apellido = new ElementRef('input');
    this.titulo = new ElementRef('input');
    this.presentacion = new ElementRef('textarea');
    this.foto = new ElementRef('input');

    this.form = this.formBuilder.group({
      nombre: [],
      apellido: [],
      titulo: [],
      presentacion: [],
      foto: [],
    });
  }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    this.servInformation.getInformation().subscribe((data) => {
      this.perfilimg = data.foto;
      this.foto.nativeElement.value = data.foto;
      this.nombre.nativeElement.value = data.nombre;
      this.apellido.nativeElement.value = data.apellido;
      this.titulo.nativeElement.value = data.titulo;
      this.presentacion.nativeElement.value = data.presentacion;
    });
  }

  onSave(value: Information) {
    value.id = 1;

    //si alguno de los inputs no fue tocado va a ser == null,
    // en ese caso se le asigna el valor que tenia al principio.
    if (value.nombre == null) {
      value.nombre = this.nombre.nativeElement.value;
    }
    if (value.apellido == null) {
      value.apellido = this.apellido.nativeElement.value;
    }
    if (value.titulo == null) {
      value.titulo = this.titulo.nativeElement.value;
    }
    if (value.presentacion == null) {
      value.presentacion = this.presentacion.nativeElement.value;
    }
    if (value.foto == null) {
      value.foto = this.foto.nativeElement.value;
    }

    this.servInformation.editInformation(value).subscribe(
      (data) => {
        console.log(data);
        
        this.save.emit(true); //se emite un evento para que vaya al inicio cuando tenga la respuesta
      },
      (errors) => {
        console.log(errors);
        if (errors.status == 401) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'your session has expired, please login again'
          })
          this.router.navigateByUrl('/');
        }
      }
    );
  }
}
