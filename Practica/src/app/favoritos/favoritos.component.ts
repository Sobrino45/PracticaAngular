import { Component } from '@angular/core';
import { City } from '../models/city';
import { FavoritosService } from '../services/favoritos.service';

@Component({
  selector: 'app-favoritos',
  standalone: false,
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent {
  favoritos: City[] = [];

  constructor(private favoritosService: FavoritosService) {
    this.favoritos = this.favoritosService.getFavoritos();
  }

  eliminar(id: number) {
    this.favoritosService.eliminarFavorito(id);
    this.favoritos = this.favoritosService.getFavoritos();
  }
}
