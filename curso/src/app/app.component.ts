import { Component } from '@angular/core';
import { FirstComponentComponent } from "./components/first-component/first-component.component";

@Component({
  selector: 'app-root',
  imports: [FirstComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curso';
}
