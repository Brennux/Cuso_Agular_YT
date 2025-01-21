import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-if-render',
  imports: [CommonModule],//lembrar de colocar 
  templateUrl: './if-render.component.html',
  styleUrl: './if-render.component.css'
})
export class IfRenderComponent implements OnInit {
canshow: boolean = true;
name = 'joao'; 
  constructor() { } 
  

  ngOnInit(): void {}
}
