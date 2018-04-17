import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap } from 'rxjs/operators/tap';
import { catchError } from 'rxjs/operators/catchError';

@Injectable()
export class UserHttpService {

  constructor(
    private http: HttpClient
  ) { }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string) {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get(`api/addresses/?address=${term}`).pipe(
      tap(_ => console.log(`found addresses matching "${term}"`)),
      catchError(this.handleError('searchAddresses', []))
    );
  }

  getUserData(): Observable<any> {
    return this.http.get('assets/user-data.json').pipe(
      catchError(this.handleError('get user data', []))
    );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
