import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateComponent } from './update.component';
import { FormsModule } from '@angular/forms';
import { BooksService } from '../books.service';
import { of, throwError } from 'rxjs';
import { Book } from '../models/books.model';

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;
  let mockBooksService: jasmine.SpyObj<BooksService>;

  beforeEach(async () => {
    // Skapa en mock av BooksService med spionmetoder
    mockBooksService = jasmine.createSpyObj('BooksService', ['getOneById', 'updateBook']);

    // Konfigurera testmodulen med mockade tjänster och beroenden
    await TestBed.configureTestingModule({
      imports: [UpdateComponent, FormsModule], // FormsModule krävs för ngModel i komponenten
      providers: [{ provide: BooksService, useValue: mockBooksService }]
    }).compileComponents();

    // Skapa komponenten och kör livscykelmetoder
    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  // Kör ngOnInit om det finns
  });

  // Testar att komponenten instansieras korrekt
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // Testar att rätt bok hämtas från tjänsten och läggs in i komponentens update-objekt
  it('should fetch a book when fetchBook is called with a valid id', () => {
    const mockBook: Book = {
      _id: '123456789012345678901234',
      Title: 'Test Book',
      ISBN: 123456,
      Summary: 'This is a test book',
      Author: 'John Doe'
    };

    // Returnera en mockad bok som observable
    mockBooksService.getOneById.and.returnValue(of(mockBook));

    // Ange ID och anropa metoden
    component.bookId = mockBook._id as string;
    component.fetchBook();

    // Kontrollera att rätt ID skickats och att update-objektet uppdaterats
    expect(mockBooksService.getOneById).toHaveBeenCalledWith(mockBook._id as string);
    expect(component.update).toEqual(mockBook);
  });

  // Testar att felmeddelande visas om bok inte hittas
  it('should display error message when book is not found', () => {
    // Simulera att getOneById kastar ett fel
    mockBooksService.getOneById.and.returnValue(throwError(() => new Error('Book not found')));

    component.bookId = 'nonexistent-id';
    component.fetchBook();

    // Kontrollera att update-objektet återställts till tomt och felmeddelande visas
    expect(component.update).toEqual({
      _id: '',
      Title: '',
      ISBN: null as unknown as number,
      Summary: '',
      Author: ''
    });
    expect(component.errorMessage).toBe('Book not found');
  });

  // Testar att en bok uppdateras korrekt
  it('should update the book when updateBook is called with a valid book', () => {
    const mockBook: Book = {
      _id: '123456789012345678901234',
      Title: 'Updated Test Book',
      ISBN: 654321,
      Summary: 'Updated Summary',
      Author: 'Updated Author'
    };

    // Mocka ett lyckat svar på uppdateringen
    mockBooksService.updateBook.and.returnValue(of(mockBook));

    // Fyll i komponentens data
    component.bookId = mockBook._id as string;
    component.update = mockBook;

   // Anropa uppdateringsmetoden
    component.updateBook();

    // Kontrollera att updateBook kallades och att meddelanden + reset skedde korrekt
    expect(mockBooksService.updateBook).toHaveBeenCalledWith(mockBook._id as string, mockBook);
    expect(component.successMessage).toBe('book has been updated.');
    expect(component.bookId).toBe('');
    expect(component.update).toEqual({
      _id: '',
      Title: '',
      ISBN: null as unknown as number,
      Summary: '',
      Author: ''
    });
  });

  // Testar att felmeddelande visas om uppdatering misslyckas
  it('should display error message when update fails', () => {
    const errorBook: Book = {
      _id: '123456789012345678901234',
      Title: 'Error Test Book',
      ISBN: 123456,
      Summary: 'This book will fail to update',
      Author: 'Error Author'
    };

    // Mocka ett fel från updateBook
    mockBooksService.updateBook.and.returnValue(throwError(() => new Error('Update failed')));

    // Fyll i komponentens data
    component.bookId = errorBook._id as string;
    component.update = errorBook;

    // Anropa uppdateringsmetoden
    component.updateBook();

    // Kontrollera att metoden kallats och att rätt felmeddelande visas
    expect(mockBooksService.updateBook).toHaveBeenCalledWith(errorBook._id as string, errorBook);
    expect(component.errorMessage).toBe('update has failed check id or networkerror.');
  });
});
