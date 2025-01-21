import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-render',
  imports: [CommonModule],//lembrar de colocar 
  templateUrl: './if-render.component.html',
  styleUrl: './if-render.component.css'
})
export class IfRenderComponent implements OnInit {
 canShow: boolean = true;
 name = 'matheus'; 
  constructor() { } 
  

  ngOnInit(): void {}
}
