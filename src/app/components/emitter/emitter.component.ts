import { Component, OnInit} from '@angular/core';
import { ChangeNumberComponent } from "../change-number/change-number.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emitter',
  imports: [CommonModule, ChangeNumberComponent],
  templateUrl: './emitter.component.html',
  styleUrl: './emitter.component.css'
})
export class EmitterComponent implements OnInit {

  myNumber: number = 0;

  constructor() {}

  ngOnInit(): void {
  }
  onChangeNumber() {
    this.myNumber = Math.floor(Math.random() * 10);
  }

}