import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURL = 'http://localhost:3000/producto';  // URL de tu API

  constructor(private http: HttpClient) { }

  // Obtener todos los productos
  get(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.baseURL);
  }

  // Crear un nuevo producto
  create(product: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.baseURL, product);
  }
}
