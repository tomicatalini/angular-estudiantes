import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaEstudianteComponent } from './lista-estudiante/lista-estudiante.component';

import localEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    ListaEstudianteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
