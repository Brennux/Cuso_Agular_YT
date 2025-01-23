import { CommonModule} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../../Animal';

@Component({
  selector: 'app-list-render',
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    {name: 'turca', type: 'dog', age: 3},
    {name: 'luna', type: 'cat', age: 2},
    {name: 'zeus', type: 'dog', age: 5},
    {name: 'milo', type: 'horse', age: 7},
  ]

  animal: Animal = {
    name: 'turca',
    type: 'dog',
    age: 3,
  };

  animalDetails = ""

  constructor() {}
  ngOnInit(): void {}

  showAge(animal: Animal) {
    this.animalDetails = `o pet ${animal.name} tem ${animal.age} anos`;
  }

  
  }

