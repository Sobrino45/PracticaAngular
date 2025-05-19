import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class GeodbService {

  private apiUrl: string = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
  private headers = {
    'X-RapidAPI-Key': '18db588efemsh8d3ce248b516642p100eb7jsn72a9ebb7d216', 
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  };

  constructor() {}

  async buscarCiudades(nombre: string, limit: number = 10): Promise<any> {
    try {
      const response = await axios.get(this.apiUrl, {
        headers: this.headers,
        params: {
          namePrefix: nombre,
          limit: limit
        }
      });
      return response.data.data;
    } catch (error) {
      console.error("Error al obtener ciudades:", error);
      return [];
    }
  }
}
