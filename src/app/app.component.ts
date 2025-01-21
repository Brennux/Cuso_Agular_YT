import { Component } from '@angular/core';
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ParentDataComponent } from "./components/parent-data/parent-data.component";
import { DirectivesComponent } from "./components/directives/directives.component";
import { IfRenderComponent } from "./components/if-render/if-render.component";
import { EventosComponent } from "./components/eventos/eventos.component";

@Component({
  selector: 'app-root',
  imports: [FirstComponentComponent, ParentDataComponent, DirectivesComponent, IfRenderComponent, EventosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone : true
})
export class AppComponent {
  username = 'Jhon Doe';

  userdata = {
    email : 'joaqui@getMaxListeners.com',
    role : 'admin',
  }


title = 'curso';

}
