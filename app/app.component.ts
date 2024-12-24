import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { ServerComponent } from './server/server.component';
// import { ServersComponent } from './servers/servers.component';
import { LoginComponent } from './loign/loign.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-angular-app';
}
