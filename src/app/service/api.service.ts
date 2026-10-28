import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timeout } from 'rxjs';

// Estructura de los datos recibidos desde JSONPlaceholder.
export interface Publicacion {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // llamasdo api
  private apiUrl = 'https://jsonplaceholder.typicode.com/comments';


  constructor(private http: HttpClient) {}

  obtenerPublicaciones(): Observable<Publicacion[]> {
    return this.http.get<Publicacion[]>(this.apiUrl).pipe(
      timeout({ first: 8000 })
    );
  }
}
