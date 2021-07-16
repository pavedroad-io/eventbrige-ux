import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';

import { Customers } from '../schemas/customers';

@Injectable({providedIn: 'root'})
export class CustomerService {
	private url: string = 'http://localhost:8081/api/v1/namespace/pavedroad/customers';
  private idurl: string = this.url + '/';

	constructor(private http: HttpClient) { 
	}


 private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) { // A client-side or network error.
     console.error('An error occurred:', error.error.message);
		} else { // Backend response errors
     console.error(
       `Backend returned code ${error.status}, ` +
       `body was: ${error.error}`);
   }

  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
  };

  getCustomers(): Observable<Customers[]> {
		 return this.http.get<Customers[]>(this.url+"LIST");
  }

  getCustomer(id: string): Observable<Customers> {
		 return this.http.get<Customers>(this.idurl+id);
  }

  createCustomer(post: Customers) {
    return this.http.post<Customers>(this.url, JSON.stringify(post));
  }

  updateCustomer(post: Customers) {
    return this.http.put<Customers>(this.idurl+post.customersuuid, JSON.stringify(post));
  }

  deleteCustomer(post: Customers) {
    return this.http.delete<Customers>(this.idurl+post.customersuuid)
      .pipe(catchError(this.handleError));
  }
}
