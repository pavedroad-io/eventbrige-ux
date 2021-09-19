/*

The deployment.service envokes the eo-manifest-mgr backend.
The eo-manifest-mgr services requires "userID" and "orgid" parameters passed for ALL HTTP methods.

The POST methods takes an event bridge configuration as its body
The POST methods generates and then deploys the customer sources and triggers
The POST method adds SyncInitiator object to all Kubernetes manifests it creates for tracing

The PUT method call POST

The GET method executes a kubectl get for all the customers generated services and returns the response as JSON

The DELETE method delete all services only returning success for failure

If configuration.kubectl is set based on the environments file
TODO: Let custom select

*/

import { environment } from '../../environments/environment';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';
import { Injectable, ViewChild, ViewChildren } from '@angular/core';

import { Customers } from '../schemas/customers';
import { ProfileService } from './profile.service';

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const USER_PARAMETER = 'userid';
const ORG_PARAMETER = 'orgid';
const CONF_PARAMETER = 'confid';

const httpOptions = {
  observe: 'response',
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({ providedIn: 'root' })
export class DeploymentService {
  private url: string =
    environment.ManifestBaseURL +
    environment.BasePath +
    environment.ManifestEndPoint;
  private profile;
  ebconfig: Customers = new Customers();

  id: string = '';

  httpResponse: any;

  constructor(private http: HttpClient, private profileSvc: ProfileService) {
    this.ProfileInit();
  }

  ProfileInit(): void {
    this.profileSvc.share.subscribe((data: any) => {
      this.profile = data;
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

  getDeployment(): Observable<string> {
    if (this.profile != undefined && this.profile.app_metadata != undefined) {
      var requrl = this.url + '/' + this.profile.app_metadata.customer_id;

      const params = new HttpParams()
        .append(USER_PARAMETER, this.profile.user_id)
        .append(ORG_PARAMETER, this.profile.app_metadata.customer_id);

      return this.http.get<string>(requrl, { params });
    } else {
      var nodata = of('{"status": "Profile not loaded"}');
      return nodata;
    }
  }

  createDeployment(post: Customers): Observable<Customers> {
    var requrl = this.url;
    const params = new HttpParams()
      .append(USER_PARAMETER, this.profile.user_id)
      .append(ORG_PARAMETER, this.profile.app_metadata.customer_id);
    return this.http.post<Customers>(requrl, JSON.stringify(post), { params });
  }

  updateDeployment(post: Customers) {
    var requrl =
      this.url +
      USER_PARAMETER +
      this.profile.user_id +
      ORG_PARAMETER +
      this.profile.app_metadata.orgID;
    this.httpResponse = this.http
      .put<Customers>(requrl, JSON.stringify(post), {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        observe: 'response',
      })
      .subscribe((data: any) => {
        console.log(data.body);
      });
    return this.httpResponse;
  }

  deleteDeployment(): Observable<string> {
    if (this.profile != undefined && this.profile.app_metadata != undefined) {
      var requrl = this.url + '/' + this.profile.app_metadata.customer_id;

      const params = new HttpParams()
        .append(USER_PARAMETER, this.profile.user_id)
        .append(ORG_PARAMETER, this.profile.app_metadata.customer_id)
        .append(CONF_PARAMETER, this.profile.app_metadata.eventbrid_config_id);

      return this.http.delete<string>(requrl, { params });
    } else {
      var nodata = of('{"status": "Profile not loaded"}');
      return nodata;
    }
  }
}
