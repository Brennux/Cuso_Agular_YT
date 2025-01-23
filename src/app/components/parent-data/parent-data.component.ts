import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  imports: [CommonModule],
  standalone : true,
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.css'
})
export class ParentDataComponent {
 @Input() name: string = '';
 @Input() userdata!: {email: string, role: string};

 constructor() {}

 ngoOnInit(): void {}

}


