import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/services/contactModel';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit, OnDestroy {
  constructor(private servContact: ContactService) {}

  edit? : boolean;

  private subs? : Subscription;

  ngOnInit(): void {
    this.getContacts();

    let userAuth = JSON.parse( sessionStorage.getItem('user') || '{}' );
    if (userAuth.authorities) {
      if (userAuth.authorities.length == 2) {this.edit = true}
    } 
    else {this.edit = false}
  }
  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }

  mostrar = true;
  onEdit() {
    this.mostrar = !this.mostrar;
    // si se muestra el edit: me desuscribo del servicio
    if(this.mostrar == false){
      this.ngOnDestroy()
      }
      //si se vuelve al presionar el boton me resuscribo al servicio
      if(this.mostrar == true){
        this.ngOnInit()
      }
  }

  contacts: Contact[] = [];

  getContacts(): void {
    this.servContact.getContacts().subscribe((data) => {
      this.contacts = data;
    });

    this.subs?.add(
      this.servContact.getContacts().subscribe((data) => {
        this.contacts = data;
      })
    )
  }
}
