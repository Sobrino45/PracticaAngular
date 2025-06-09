import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';
import { ListaComponent } from './lista/lista.component';
import { AcercadeComponent } from './acercade/acercade.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lista', component: ListaComponent },
  { path: 'acerca-de', component: AcercadeComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
