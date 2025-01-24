import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  standalone: true,
  selector: 'app-two-way-binding',
  imports: [CommonModule, FormsModule],
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.css'
})
export class TwoWayBindingComponent implements OnInit{
  name: string = '';

  constructor() {}

  ngOnInit(): void {
    
  }
}
