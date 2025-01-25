import { CommonModule} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../../Animal';
import { ListService } from '../../services/list.service';
import { RouterLink, RouterModule } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-list-render',
  imports: [CommonModule,RouterLink],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [];

  animalDetails = ""

  constructor(private listService:ListService ) {
    this.getANimals()
  }
  ngOnInit(): void {}

  showAge(animal: Animal) {
    this.animalDetails = `o pet ${animal.name} tem ${animal.age} anos`;
  }

  removeanimal(animal: Animal) {
    console.log('Removendo annimal...');
    this.animals = this.listService.remove(this.animals, animal);
  }
  
  getANimals() {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }


}
