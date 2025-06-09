import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';           

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './lista/lista.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { AbreviarNumeroPipe } from './pipes/abreviar-numero.pipe';

@NgModule({
  declarations: [
   AppComponent,
    HomeComponent,
    Error404Component,
    ListaComponent,
    AcercadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AbreviarNumeroPipe
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
