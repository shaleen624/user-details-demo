import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators/catchError';

@Injectable()
export class UserHttpService {

  constructor(
    private http: HttpClient
  ) { }
  /**
   * Get call to fetch user-data.json file.
   */
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
      console.error(error); // log to console
      console.log(`${operation} failed: ${error.message}`);
      // Keep the app running by returning an empty result.
      return of(result as T);
    };
  }

}
