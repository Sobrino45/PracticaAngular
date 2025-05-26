import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';           
import { CommonModule } from '@angular/common';        

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListaComponent } from './lista/lista.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { AcercadeComponent } from './acercade/acercade.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    AcercadeComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
