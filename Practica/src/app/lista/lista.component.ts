import { Component } from '@angular/core';
import { GeodbService } from '../services/geodb.service';
import { City } from '../models/city';
import { FavoritosService } from '../services/favoritos.service';

@Component({
  selector: 'app-lista',
  standalone: false,
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  ciudades: City[] = [];
  busqueda: string = '';
  error: string = '';

  constructor(private geodbService: GeodbService, private favoritosService: FavoritosService) {}

  buscarCiudades() {
    if (this.busqueda.trim() !== '') {
      this.geodbService.buscarCiudades(this.busqueda, 10)
        .then((data: City[]) => {
          this.ciudades = data;
          this.error = '';
        })
        .catch(err => {
          this.error = 'Error al buscar ciudades. Inténtalo de nuevo.';
          this.ciudades = [];
        });
    } else {
      this.error = 'Introduce un nombre para buscar.';
      this.ciudades = [];
    }
  }

  agregarAFavoritos(ciudad: City) {
    this.favoritosService.agregarFavorito(ciudad);
  }
}
