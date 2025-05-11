import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetAllComponent } from './get-all.component';
import { MockBooksService } from '../mock-books.service';
import { BooksService } from '../books.service';
import { of } from 'rxjs';
import { Book } from '../models/books.model';  // Importera Book-typen

describe('GetAllComponent', () => {
  let component: GetAllComponent;
  let fixture: ComponentFixture<GetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllComponent],
      providers: [
        { provide: BooksService, useClass: MockBooksService },  // Mocka BooksService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(GetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve all books (mocked with empty list)', () => {
    const mockBooks: Book[] = [];  // Explicit typ av mockBooks som Book[]

    // Mocka getAllBooks metoden
    spyOn(component['booksService'], 'getAllBooks').and.returnValue(of(mockBooks));

    component.getAllBooks();
    fixture.detectChanges();

    expect(component.books.length).toBe(0);  // Förvänta sig 0 böcker eftersom listan är tom
    expect(component.books).toEqual(mockBooks);  // Förvänta sig att böckerna är lika med den tomma listan
  });
});
