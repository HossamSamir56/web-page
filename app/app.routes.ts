import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// import { ServerComponent } from './server/server.component';
// import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './loign/loign.component';

@NgModule({
  declarations: [],
  imports: [BrowserModule, FormsModule, AppComponent, LoginComponent],
  providers: [],
  bootstrap: [],
})
export class AppModule {}

export const routes: Routes = [];
