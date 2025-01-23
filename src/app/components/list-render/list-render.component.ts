import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals = [
    {name: 'turca', type: 'dog'},
    {name: 'luna', type: 'cat'},
    {name: 'zeus', type: 'dog'},
    {name: 'milo', type: 'horse'},
  ]

}
