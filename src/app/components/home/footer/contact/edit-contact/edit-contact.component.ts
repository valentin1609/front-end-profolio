import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/services/contactModel';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  form : FormGroup;

  constructor(private servContact: ContactService, private formBuilder : FormBuilder, private router: Router) { 
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
  )
  }



  deleteContact(id:any): void {
    this.servContact.deleteContact(id).subscribe( () => {
      this.getContacts();
    }, (errors) => {
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
    )
  }

}
