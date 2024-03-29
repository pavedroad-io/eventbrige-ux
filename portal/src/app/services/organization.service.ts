import { environment } from '../../environments/environment';
import { Injectable, ViewChild, ViewChildren } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';

import { Customers } from '../schemas/customers';
import { Organization } from '../schemas/organization';
import { SaaSService } from '../schemas/saas_service';
import { AppMetadataComponent } from '../schemas/app-metadata/app-metadata.component';

import { ProfileService } from './profile.service';

const sleep = (milliseconds: any) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const httpOptions = {
  observe: 'response',
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({ providedIn: 'root' })
export class OrganizationService {
  private url: string =
    environment.OrgBaseURL + environment.BasePath + environment.OrgEndPoint;
  private idurl: string = this.url + '/';
  private profile: any;

  id: string = '';
  public organization: Organization;

  httpResponse: any;
  public ctx: any;
  public share: any;

  UpdateOrganization(data:Organization, updateMetadata:any) {
    this.organization = data;
    this.ctx.next(data);
    this.updateOrganization(data, updateMetadata);
  }

  loadOrg(id: string) {
    this.getOrganization(id).subscribe(data => {
      this.organization = data;
      this.ctx.next(data);
    });
  }

  constructor(private http: HttpClient, private profileSvc: ProfileService) {
    this.organization = new Organization();
    //this.organization.organizationuuid = this.id;

    // TODO fix this it needs to be undefined
    //this.organization = undefined;
    this.ServiceInit();
    this.ProfileInit();
  }

  ServiceInit(): void {
    if (this.id != '')
      this.getOrganization(this.organization.organizationuuid).subscribe(
        (data: any) => {
          this.organization = data;
        }
      );
    this.ctx = new BehaviorSubject<any>(this.organization);
    this.share = this.ctx.asObservable();
  }

  ProfileInit(): void {
    // debugger;
    sleep(1000).then(() => {
      this.profileSvc.share.subscribe((data: any) => {
        this.profile = data;
      });
    });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error.
      console.error('An error occurred:', error.error.message);
    } else {
      // Backend response errors
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }

    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  getOrganizations(): Observable<Organization[]> {
    return this.http.get<Organization[]>(this.url + 'LIST');
  }

  getOrganization(id: string): Observable<Organization> {
    this.httpResponse = this.http.get<Organization>(this.idurl + id);
    return this.httpResponse;
  }

  createOrganization(post: Organization): Observable<any> {
    this.url = this.url + '?user_idp_tokens=' + this.profile.user_id;
    return this.http.post<Organization>(this.url, JSON.stringify(post));
  }

  updateOrganization(post: Organization, updateMetadata: boolean) {
    this.httpResponse = this.http
      .put<Organization>(
        this.idurl + post.organizationuuid + '?update_metadata=' + updateMetadata,
        JSON.stringify(post),
        {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
          observe: 'response',
        }
      )
      .subscribe((data: any) => {
        //console.log(data.body);
      });
    return this.httpResponse;
  }

  deleteOrganization(post: Organization) {
    return this.http
      .delete<Organization>(this.idurl + post.organizationuuid)
      .pipe(catchError(this.handleError));
  }
}
