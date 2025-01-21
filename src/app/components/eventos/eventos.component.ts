import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-eventos',
  imports: [CommonModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
  show: boolean = false;

  constructor() {}

  ngoOnInit(): void {}

  showmessage(): void {
    this.show = !this.show; // toggle
  }
}
