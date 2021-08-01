import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';

import { Customers } from '../schemas/customers';
import { Organization } from '../schemas/organization';

const sleep = (milliseconds) => {
 return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const httpOptions = {
  observe: 'response',
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  }),
};

@Injectable({providedIn: 'root'})
export class OrganizationService {
	private url: string = 'http://localhost:8082/api/v1/namespace/pavedroad/organization';
  private idurl: string = this.url + '/';

  id: string = "";
  public organization: Organization;

  httpResponse: any;
  public ctx;
  public share;


  UpdateOrganization(data) {
    this.organization = data;
    this.ctx.next(data);
    this.updateOrganization(data);
  }

  Save(data) {
    return this.UpdateOrganization(data);
  }

  loadOrg(id: string){
    this.getOrganization(id).subscribe((data: any) => {
      this.organization = data;
      this.ctx.next(data);
    });
  }

	constructor(private http: HttpClient) { 
    this.organization = new Organization();
    this.organization.organizationuuid =  this.id;
    this.ServiceInit();
	}

  IsReady(): any {
    sleep(80).then(() => {
      if ( this.share !== undefined ) {
        return true;
      }
    });
  }

  ServiceInit(): void {
    if (this.id != "")
      this.getOrganization(this.organization.organizationuuid).subscribe((data: any) => {
        this.organization = data;
      });
    this.ctx = new BehaviorSubject<any>(this.organization);
    this.share = this.ctx.asObservable();
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

  getOrganizations(): Observable<Organization[]> {
		 return this.http.get<Organization[]>(this.url+"LIST");
  }

  getOrganization(id: string): Observable<Organization> {
		 this.httpResponse = this.http.get<Organization>(this.idurl+id);
		 return this.httpResponse;
		 //return this.http.get<Organization>(this.idurl+id);
  }


  createOrganization(post: Organization): Observable<any> {
    return this.http.post<Organization>(this.url, JSON.stringify(post));
  }

  updateOrganization(post: Organization) {
    this.httpResponse = this.http.put<Organization>(
      this.idurl+post.organizationuuid,
      JSON.stringify(post),{
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
        observe: 'response'}).subscribe((data: any) => {
           //console.log(data.body);
         });
		return this.httpResponse;
  }

  deleteOrganization(post: Organization) {
    return this.http.delete<Organization>(this.idurl+post.organizationuuid)
      .pipe(catchError(this.handleError));
  }
}
