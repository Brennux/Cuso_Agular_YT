import { CommonModule} from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [CommonModule],
  standalone : true,
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent implements OnInit {
size = 40
font = 'Arial'
COLOR = 'red'

classes = ['green-title', 'small-title'];
underline = 'underline-title';

  constructor() { }

  ngOnInit(): void {
  }
}
