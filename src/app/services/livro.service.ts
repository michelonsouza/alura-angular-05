import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LivrosResultado } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  private readonly API_URL = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) {}

  buscar(value: string): Observable<LivrosResultado> {
    const params = new HttpParams().append('q', value);

    return this.http.get<LivrosResultado>(this.API_URL, { params });
  }
}
