import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';  // Importera provideRouter
import { AppComponent } from './app.component';

// Här definierar vi en enkel routingkonfiguration för testet
const routes = [
  { path: '', component: AppComponent }
];

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],  // Vi importerar AppComponent här
      providers: [
        provideRouter(routes),  // Använd provideRouter för att definiera routing
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();  // Testa att appen skapas korrekt
  });

  // Eftersom AppComponent har router-outlet bör vi testa om routing fungerar
  it('should contain a router-outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // Kontrollera att router-outlet finns i DOM
    expect(compiled.querySelector('router-outlet')).not.toBeNull();
  });
});
