import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface ICustomerResponse {
	id: string;
  created: string;
  updated: string;
	name: string;
  key: string;

}

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
	private url: string = 'https://localhost/api/v1/namespace/pavedroad.io/services';
  private idurl: string = this.url + '/';

	data: Array<ICustomerResponse> = [
		{ id: "1", name: "PageRoad", created: "01/01/1970", updated: "12/31/2021", key: "abcdefg" },
		{ id: "2", name: "Wasabi", created: "01/01/1970", updated: "12/31/2021", key: "hkjl" },
		{ id: "3", name: "Rstor", created: "01/01/1970", updated: "12/31/2021", key: "mnop" },
		{ id: "4", name: "Azure", created: "01/01/1970", updated: "12/31/2021", key: "qustx" },
	];

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

  getServices() {
		return this.data;
		// return this.http.get<Array<ICustomerResponse>>(this.url, { observe: 'response' });
    //  .subscribe( error => {
    //    console.log(this);
    //});
  }

  createService(post: ICustomerResponse) {
    return this.http.post<ICustomerResponse>(this.url, JSON.stringify(post));
  }

  updateService(post: ICustomerResponse) {
    return this.http.put<ICustomerResponse>(this.idurl+post.id, JSON.stringify(post));
  }

  deletePost(post: ICustomerResponse) {
    return this.http.delete<ICustomerResponse>(this.idurl+post.id)
      .pipe(catchError(this.handleError));
  }
}
