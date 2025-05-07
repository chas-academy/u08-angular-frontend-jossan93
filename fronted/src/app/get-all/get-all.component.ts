import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-all',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css']

})
export class GetAllComponent implements OnInit {

  books: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getAllBooks(): void {
    console.log('Fetching books...');
    this.http.get<any[]>('https://u05-restful-api-jossan93.onrender.com/api/books/')
      .subscribe({
        next: (data) => this.books = data,
        error: (err) => console.error('API error', err)
      });
  }

}

