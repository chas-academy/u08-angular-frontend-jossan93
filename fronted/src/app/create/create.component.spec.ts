import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateComponent } from './create.component';
import { BooksService } from '../books.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';  // Importera rätt metod för HTTP-mockning
import { MockBooksService } from '../mock-books.service';  // Importera MockBooksService

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateComponent],  // Lägg till CreateComponent som import
      providers: [
        { provide: BooksService, useClass: MockBooksService },  // Använd mockad BooksService
        provideHttpClientTesting()  // Lägg till HTTP-mockning för test
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();  // Testa om komponenten skapas korrekt
  });
});
