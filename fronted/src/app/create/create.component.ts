import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../models/books.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
    newBook: Book = {
    Title: '',
    ISBN: 0,
    Summary: '',
    Author: ''
  };

  constructor(private booksService: BooksService) {}

  successMessage: string = '';
  errorMessage: string = '';

  create(): void {
    this.successMessage = '';
    this.errorMessage = '';

    const bookToSend = {
      ...this.newBook,
      ISBN: Number(this.newBook.ISBN)  // ✅ konvertera ISBN till number
    };

  this.booksService.createBook(bookToSend).subscribe({
    next: () => {
      this.successMessage = 'Book has been added.';
      this.newBook = { Title: '', ISBN: 0, Summary: '', Author: '' }; // Rensa formulär
    },
    error: (err) => {
      console.error('Error creating book', err);
      this.errorMessage = 'Adding book has failed check input or networkerror.';
    }
  });
}
}
