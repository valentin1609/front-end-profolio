import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title : string = 'Proyect';
  url: string = 'http://sedfs.com';
  description : String = "Lorem ipsum dolor sit amet, consectetur adipisicing elit,  sed do eiusmod tempor incididunt ut   labore et dolore magna aliqua."



}
