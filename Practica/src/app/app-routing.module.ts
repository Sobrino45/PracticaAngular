import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'lista',
    loadComponent: () => import('./lista/lista.component').then(m => m.ListaComponent)
  },
  {
    path: 'acerca-de',
    loadComponent: () => import('./acercade/acercade.component').then(m => m.AcercadeComponent)
  },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
