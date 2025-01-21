import { Component, OnInit} from '@angular/core';
import { ChangeNumberComponent } from "../change-number/change-number.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emitter',
  imports: [CommonModule],
  templateUrl: './emitter.component.html',
  styleUrl: './emitter.component.css'
})
export class EmitterComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }
  onCHangeNumber() {
    console.log("Deu certo");
  }

}