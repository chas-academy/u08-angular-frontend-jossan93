import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../models/books.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-get-one-by-id',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './get-one-by-id.component.html',
  styleUrls: ['./get-one-by-id.component.css']
})
export class GetOneByIDComponent {
  bookId: string = '';
  book: Book | null = null;
  errorMessage: string = '';

  constructor(private booksService: BooksService) {}

  getbyid(): void {
    this.errorMessage = '';
    this.book = null;

    this.booksService.getOneById(this.bookId).subscribe({
      next: (data) => this.book = data,
      error: (err) => this.errorMessage = 'book could not be found.'
    });
  }
}

