import { Component, ChangeDetectorRef } from '@angular/core';
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

  constructor(
    private geodbService: GeodbService,
    private favoritosService: FavoritosService,
    private cdr: ChangeDetectorRef
  ) {}

  buscarCiudades() {
    const texto = this.busqueda.trim();

    if (!texto) {
      this.error = 'Introduce un nombre para buscar.';
      this.ciudades = [];
      this.cdr.detectChanges();
      return;
    }

    this.geodbService.buscarCiudades(texto, 10)
      .then((data: City[]) => {
        if (!data || data.length === 0) {
          this.error = 'No se encontraron ciudades con ese nombre.';
          this.ciudades = [];
        } else {
          this.ciudades = data;
          this.error = '';
        }
        this.cdr.detectChanges();
      })
      .catch(err => {
        this.error = 'Error al buscar ciudades. Inténtalo de nuevo.';
        this.ciudades = [];
        this.cdr.detectChanges();
      });
  }

  agregarAFavoritos(ciudad: City) {
    this.favoritosService.agregarFavorito(ciudad);
  }

}
