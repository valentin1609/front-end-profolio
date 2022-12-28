import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/services/contactModel';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(private servContact: ContactService) {}

  edit? : boolean;

  ngOnInit(): void {
    this.getContacts();

    let userAuth = JSON.parse( sessionStorage.getItem('user') || '{}' );
    if (userAuth.authorities) {
      if (userAuth.authorities.length == 2) {this.edit = true}
    } 
    else {this.edit = false}
  }

  mostrar = true;
  onEdit() {
    this.mostrar = !this.mostrar;
  }

  contacts: Contact[] = [];

  getContacts(): void {
    this.servContact.getContacts().subscribe((data) => {
      this.contacts = data;
    });
  }
}
