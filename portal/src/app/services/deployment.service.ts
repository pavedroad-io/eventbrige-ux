import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders, } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';

import { Customers } from '../schemas/customers';
import { Organization } from '../schemas/organization';

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const httpOptions = {
  observe: 'response',
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({ providedIn: 'root' })
export class DeploymentService {
  private url: string =
    environment.ManifestBaseURL + environment.BasePath + environment.ManifestEndPoint;
  private idurl: string = this.url + '/';
  private profile;

  id: string = '';
  public organization: Organization;

  httpResponse: any;
  public ctx;
  public share;

  constructor(private http: HttpClient, private profileSvc: ProfileService) {
    this.organization = new Organization();
    this.organization.organizationuuid = this.id;
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
    //return this.http.get<Organization>(this.idurl+id);
  }

  createOrganization(post: Organization): Observable<any> {
    this.url = this.url + '?user_idp_tokens=' + this.profile.user_id;
    return this.http.post<Organization>(this.url, JSON.stringify(post));
  }

  updateOrganization(post: Organization) {
    this.httpResponse = this.http
      .put<Organization>(
        this.idurl + post.organizationuuid,
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
