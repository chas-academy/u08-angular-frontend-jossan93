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
    mockBooksService = jasmine.createSpyObj('BooksService', ['getOneById', 'updateBook']);

    await TestBed.configureTestingModule({
      imports: [UpdateComponent, FormsModule],
      providers: [{ provide: BooksService, useValue: mockBooksService }]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch a book when fetchBook is called with a valid id', () => {
    const mockBook: Book = {
      _id: '123456789012345678901234',
      Title: 'Test Book',
      ISBN: 123456,
      Summary: 'This is a test book',
      Author: 'John Doe'
    };

    mockBooksService.getOneById.and.returnValue(of(mockBook));

    component.bookId = mockBook._id as string;
    component.fetchBook();

    expect(mockBooksService.getOneById).toHaveBeenCalledWith(mockBook._id as string);
    expect(component.update).toEqual(mockBook);
  });

  it('should display error message when book is not found', () => {
    mockBooksService.getOneById.and.returnValue(throwError(() => new Error('Book not found')));

    component.bookId = 'nonexistent-id';
    component.fetchBook();

    expect(component.update).toEqual({
      _id: '',
      Title: '',
      ISBN: null as unknown as number,
      Summary: '',
      Author: ''
    });
    expect(component.errorMessage).toBe('Book not found');
  });

  it('should update the book when updateBook is called with a valid book', () => {
    const mockBook: Book = {
      _id: '123456789012345678901234',
      Title: 'Updated Test Book',
      ISBN: 654321,
      Summary: 'Updated Summary',
      Author: 'Updated Author'
    };

    mockBooksService.updateBook.and.returnValue(of(mockBook));

    component.bookId = mockBook._id as string;
    component.update = mockBook;

    component.updateBook();

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

  it('should display error message when update fails', () => {
    const errorBook: Book = {
      _id: '123456789012345678901234',
      Title: 'Error Test Book',
      ISBN: 123456,
      Summary: 'This book will fail to update',
      Author: 'Error Author'
    };

    mockBooksService.updateBook.and.returnValue(throwError(() => new Error('Update failed')));

    component.bookId = errorBook._id as string;
    component.update = errorBook;

    component.updateBook();

    expect(mockBooksService.updateBook).toHaveBeenCalledWith(errorBook._id as string, errorBook);
    expect(component.errorMessage).toBe('update has failed check id or networkerror.');
  });
});
