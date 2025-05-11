import { of } from 'rxjs';

export class MockBooksService {
  getAllBooks() {
    return of([]);  // Mockar en tom lista för böcker
  }

  createBook(book: any) {
    return of(book);  // Mockar skapandet av en bok
  }
}
