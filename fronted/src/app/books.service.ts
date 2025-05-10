import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './models/books.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

    private apiUrl = 'https://u05-restful-api-jossan93.onrender.com/api/books/';
  
    constructor(private http: HttpClient) {}
  
    getAllBooks(): Observable<Book[]> {
      return this.http.get<Book[]>(this.apiUrl);
  }
}