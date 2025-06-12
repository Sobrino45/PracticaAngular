import { Injectable } from '@angular/core';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private favoritos: City[] = [];

  constructor() {}

  getFavoritos(): City[] {
    return this.favoritos;
  }

  agregarFavorito(ciudad: City): void {
    if (!this.favoritos.some(c => c.id === ciudad.id)) {
      this.favoritos.push(ciudad);
    }
  }

  eliminarFavorito(id: number): void {
    this.favoritos = this.favoritos.filter(c => c.id !== id);
  }
}
