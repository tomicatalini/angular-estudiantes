import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaEstudianteComponent } from './lista-estudiante/lista-estudiante.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEstudianteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
