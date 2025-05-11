import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../models/books.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  bookId: string = '';
  update: Book = {
    _id: '',
    Title: '',
    ISBN: 0,
    Summary: '',
    Author: ''
  };

  constructor(private booksService: BooksService) {}

  fetchBook(): void {
    if (!this.bookId.trim()) return;

    this.booksService.getOneById(this.bookId).subscribe({
      next: (book) => {
        this.update = { ...book };
      },
      error: () => {
        alert('Book not found');
        this.update = {
          _id: '',
          Title: '',
          ISBN: 0,
          Summary: '',
          Author: ''
        };
      }
    });
  }

  successMessage: string = '';
  errorMessage: string = '';

  updateBook(): void {
    const trimmedId = this.bookId.trim();
    this.successMessage = '';
    this.errorMessage = '';

    if (trimmedId.length !== 24) {
      this.errorMessage = 'ID has to be 24.';
      return;
    }

    this.booksService.updateBook(trimmedId, this.update).subscribe({
      next: () => {
        this.successMessage = 'book has been updated.';
        this.bookId = '';
        this.update = {
          _id: '',
          Title: '',
          ISBN: 0,
          Summary: '',
          Author: ''
        };
      },
      error: () => {
        this.errorMessage = 'update has failed check id or networkerror.';
      }
    });
  }
}