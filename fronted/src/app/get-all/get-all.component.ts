import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BooksService } from '../books.service';
import { Book } from '../models/books.model';

@Component({
  selector: 'app-get-all',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css']

})
export class GetAllComponent implements OnInit {

  books: Book[] = [];

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {}

  getAllBooks(): void {
    console.log('Fetching books...');
    this.booksService.getAllBooks().subscribe({
      next: (data) => this.books = data,
      error: (err) => console.error('API error', err)
    });
  }
}

