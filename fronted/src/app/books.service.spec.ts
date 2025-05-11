/* import { TestBed } from '@angular/core/testing';
import { BooksService } from './books.service';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing'; // Correct imports for Angular 19
import { Book } from './models/books.model'; // Import the model

describe('BooksService', () => {
  let service: BooksService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BooksService, // Inject BooksService
        provideHttpClientTesting(), // Provide the HttpClient for testing in Angular 19
      ]
    });

    service = TestBed.inject(BooksService); // Inject BooksService
    httpMock = TestBed.inject(HttpTestingController); // Inject HttpTestingController to mock HTTP requests
  });

  afterEach(() => {
    httpMock.verify(); // Verify that no unwanted HTTP requests were made
  });

  it('should retrieve all books from the API via GET', () => {
    const dummyBooks: Book[] = [
      { _id: '1', Title: 'Book 1', ISBN: 123456789, Summary: 'Summary 1', Author: 'Author 1' },
      { _id: '2', Title: 'Book 2', ISBN: 987654321, Summary: 'Summary 2', Author: 'Author 2' },
    ];

    // Call the service method
    service.getAllBooks().subscribe((books) => {
      expect(books.length).toBe(2); // Verify the number of books
      expect(books).toEqual(dummyBooks); // Verify that the books match the dummy data
    });

    // Verify the GET request is made to the correct URL
    const req = httpMock.expectOne('https://u05-restful-api-jossan93.onrender.com/api/books');
    expect(req.request.method).toBe('GET'); // Check that the method is GET
    req.flush(dummyBooks); // Return the mocked data
  });
});

*/