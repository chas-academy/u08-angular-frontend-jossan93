/* import { TestBed } from '@angular/core/testing';
import { BooksService } from './books.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('BooksService', () => {
  let service: BooksService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Lägg till HttpClientTestingModule
      providers: [BooksService],  // Lägg till BooksService
    });
    service = TestBed.inject(BooksService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  // TEST 1: Kontrollera att BooksService skapas korrekt
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // TEST 2: Kontrollera att BooksService hämtar böcker (Kommentera bort de andra testerna du inte behöver här)
  // it('should retrieve books', () => {
  //   const mockBooks = [{ id: 1, title: 'Test Book' }];
  //   service.getBooks().subscribe((books) => {
  //     expect(books.length).toBe(1);
  //     expect(books).toEqual(mockBooks);
  //   });
  //   const req = httpMock.expectOne('your-api-endpoint-here');
  //   expect(req.request.method).toBe('GET');
  //   req.flush(mockBooks);
  // });

  afterEach(() => {
    httpMock.verify();  // Kontrollera att inga oönskade HTTP-anrop gjordes
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteComponent } from './delete.component';
import { BooksService } from '../books.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('DeleteComponent', () => {
  let component: DeleteComponent;
  let fixture: ComponentFixture<DeleteComponent>;
  let booksService: BooksService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Lägg till HttpClientTestingModule
      providers: [BooksService],  // Lägg till BooksService
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteComponent);
    component = fixture.componentInstance;
    booksService = TestBed.inject(BooksService);
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  // TEST 3: Kontrollera att DeleteComponent skapas korrekt
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TEST 4: Kontrollera delete-funktion i DeleteComponent
  it('should call delete book', () => {
    const mockResponse = { message: 'Deleted successfully' };

    component.deleteBook(1);  // Anropa deleteBook-metoden
    const req = httpMock.expectOne('your-api-delete-endpoint-here');  // Ange rätt URL
    expect(req.request.method).toBe('DELETE');
    req.flush(mockResponse);
  });

  afterEach(() => {
    httpMock.verify();  // Kontrollera att inga oönskade HTTP-anrop gjordes
  });
});
*/