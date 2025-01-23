import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent implements OnInit {
  
  someText = "testando o pipe operator";
  
  today = new Date();

  constructor() {}

  ngOnInit() {} 

}
