import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/services/contactModel';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  form : FormGroup;

  constructor(private servContact: ContactService, private formBuilder : FormBuilder) { 
    this.form = this.formBuilder.group({
      nombre: [,Validators.required],
      url:[]
      })
  }

  onSubmit(value: Contact) : void{
    this.addContact(value);
    this.form.reset();
  }

  ngOnInit(): void {
    this.getContacts();
  }


  contacts: Contact[] = [];

  getContacts(): void {
    this.servContact.getContacts().subscribe((data) => {
      this.contacts = data;
    });
  }

  addContact(value: any) : void{
  this.servContact.addContact(value).subscribe( () => {
    this.getContacts();
  })
  }



  deleteContact(id:any): void {
    this.servContact.deleteContact(id).subscribe( () => {
      this.getContacts();
    })
  }

}
