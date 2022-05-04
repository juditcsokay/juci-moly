import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './shared/book.model';
import { delay, map, mergeMap, switchMap, tap } from 'rxjs/operators';

interface BookResponse {
  books: Book[];
  userId: number;
}

interface DetailedBookResponse {
  book: Book;
}

@Injectable({
  providedIn: 'root',
})
export class MolyService {
  bookIds: number[] = [];
  apiKey: string = 'd0ef40306df458234aea476398bc164f';
  constructor(private http: HttpClient) {}

  searchBooks(searchInput: string) {
    this.http
      .get<BookResponse[]>('https://jsonplaceholder.typicode.com/posts', {
        params: {},
      })
      .pipe(
        tap((response) => console.log(response)),
        mergeMap((bookResponse) => bookResponse.map((book) => book.userId)),
        mergeMap((bookId) =>
          this.http.get<DetailedBookResponse>(
            `https://jsonplaceholder.typicode.com/users/${bookId}`,
            {
              params: {},
            }
          )
        )
      )
      .subscribe((response) => console.log(response));
  }
}
