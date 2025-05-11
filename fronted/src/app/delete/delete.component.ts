import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../models/books.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-delete',
  imports: [CommonModule, FormsModule],
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
    bookId: string = '';
  delete: Book = {
    _id: '',
    Title: '',
    ISBN: null as unknown as number,
    Summary: '',
    Author: ''
  };

  constructor(private booksService: BooksService) {}
  
  fetchBook(): void {
    if (!this.bookId.trim()) return;

    this.booksService.getOneById(this.bookId).subscribe({
      next: (book) => {
        this.delete = { ...book };
      },
      error: () => {
        alert('Book not found');
        this.delete = {
          _id: '',
          Title: '',
          ISBN: null as unknown as number,
          Summary: '',
          Author: ''
        };
      }
    });
  }
  successMessage: string = '';
  errorMessage: string = '';

  deleteBook(): void {
    const trimmedId = this.bookId.trim();
    this.successMessage = '';
    this.errorMessage = '';

    if (trimmedId.length !== 24) {
      this.errorMessage = 'ID has to be 24.';
      return;
    }

    this.booksService.deleteBook(trimmedId).subscribe({
      next: () => {
        this.successMessage = 'book has been deleted.';
        this.bookId = '';
        this.delete = {
          _id: '',
          Title: '',
          ISBN: null as unknown as number,
          Summary: '',
          Author: ''
        };
      },
      error: () => {
        this.errorMessage = 'delete has failed check id or networkerror.';
      }
    });
  }
}

