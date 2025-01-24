import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-parent-data',
  imports: [CommonModule,RouterModule],
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


