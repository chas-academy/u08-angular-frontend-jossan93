[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/3hLk1m_7)

# Angular Book API
En enkel Angular-applikation som hanterar böcker via ett REST API. Användaren kan skapa, läsa, uppdatera och radera (CRUD) böcker. Applikationen kommunicerar med ett externt API.

## Installation
Klona projektet:

> git clone https://github.com/chas-academy/u08-angular-frontend-jossan93

## Installera:
> npm install

### Starta utvecklingsservern:

> ng serve

Öppna i webbläsaren:

Gå till http://localhost:4200

## Funktioner
| Funktion	| Beskrivning |
| ----------- | ----------- |
| Hämta alla böcker |	`GetAllComponent` hämtar och visar alla böcker. |
| Hämta en bok med ID | `GetOneByIDComponent` visar en specifik bok baserat på ID. |
| Skapa bok	| `CreateComponent` innehåller formulär för att skapa en ny bok. |
| Uppdatera bok	| `UpdateComponent` låter dig redigera en befintlig bok va ID. |
| Radera bok	| `DeleteComponent` tar bort en bok via ID. |
| Startsida	| `HomeComponent` är navet där användaren navigerar vidare. |

## För utvecklare – Kom igång snabbt
För dig som ska arbeta vidare med projektet – här är en snabb genomgång:

1. Förstå datamodellen
Alla böcker följer modellen i books.model.ts:
```
export interface Book {
  _id?: string;
  Title: string;
  ISBN?: number;
  Summary: string;
  Author: string;
}
```
2. API-anrop och tjänster
Alla API-anrop hanteras av books.service.ts. Några exempel:

```
getAllBooks(): Observable<Book[]> {
  return this.http.get<Book[]>(`${this.baseUrl}`);
}

createBook(book: Book): Observable<Book> {
  return this.http.post<Book>(`${this.baseUrl}/createBook`, book);
}
```

3. Routingstruktur
Navigeringen hanteras av app.routes.ts:

```
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'get-all', component: GetAllComponent },
  { path: 'get-one-by-id', component: GetOneByIDComponent },
  { path: 'create', component: CreateComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'delete', component: DeleteComponent }
];
```

4. Lägga till ny funktionalitet

För att bygga vidare:

- Skapa en ny komponent:

> ng generate component my-new-component --standalone

- Lägg till din komponent i app.routes.ts

- Använd BooksService för att hämta eller skicka data till API:et.

```txt
src/
  app/
    models/
      books.model.ts
    books.service.ts
    app.routes.ts

    create/
      create.component.ts
      create.component.html
      create.component.css
      create.component.spec.ts

    get-all/
      get-all.component.ts
      get-all.component.html
      get-all.component.css
      get-all.component.spec.ts

    get-one-by-id/
      get-one-by-id.component.ts
      get-one-by-id.component.html
      get-one-by-id.component.css
      get-one-by-id.component.spec.ts

    update/
      update.component.ts
      update.component.html
      update.component.css
      update.component.spec.ts

    delete/
      delete.component.ts
      delete.component.html
      delete.component.css
      delete.component.spec.ts

    home/
      home.component.ts
      home.component.html
      home.component.css
      home.component.spec.ts

```
### Övriga Angular-filer (standard)

Utöver dina komponenter innehåller projektet även de vanliga Angular-filerna:

- `app.component.ts` – rotkomponenten (kan användas för layout eller wrapper)
- `app.config.ts` – konfigurationsfil för Angular-applikationen:
- `styles.css` – grundläggande CSS-stilar för applikationen:

## Tips
- Säkerställ att API:t är tillgängligt innan du testar funktioner.

- Kontrollera webbkonsolen (F12) för eventuella felmeddelanden.

- Kodstandarden följer Angulars best practices – håll dig till typning och modulerat ansvar.

## Länk till deployad version

[deployad version](u08angularjossan93.netlify.app)