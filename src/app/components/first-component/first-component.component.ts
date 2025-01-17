import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css',
  standalone : true 
})
export class FirstComponentComponent implements OnInit {
 name: string = 'Breno';
 age: number = 23;
 job = "Programador";
 hobbies = ['Jogar', 'programar', 'ler'];
 car = {
  name: 'Fusca',
  year: 1969,
 }
  constructor() { }

  ngOnInit(): void {
  }

}
