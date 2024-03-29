import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { ProfileService } from './profile.service';

import { Observable } from 'rxjs';

const httpOptions = {
  observe: 'response',
  headers: new HttpHeaders({
    'Content-Type': 'text/yaml',
  }),
};

const NAMESPACE = 'namespace';
const ID = 'customerID';
const NAME = 'name';
const ENV = 'env';
const AUTH = 'auth';
const REF = 'ref';
const KUBECTX = 'ctx';
const CMD_VERB = 'cmdVerb';

@Injectable({ providedIn: 'root' })
export class WebkubectlService {

  private url: string =
    environment.WebKubeBaseURL + environment.BasePath + environment.WebKubeEndPoint;
  private profile: any;

  constructor(
    private http: HttpClient,
    private profileSvc: ProfileService) {
    this.ProfileInit();
  }

  ProfileInit(): void {
    this.profileSvc.share.subscribe((data: any) => {
      this.profile = data;
    });
  }

  // list resources for a customer
  // 
  // required
  // @param: customerID - customer ID
  // @param: user - user ID
  // @param: cmdVerb - kubectl command verb
  // @param: namespace - namespace

  // optional
  // @param: env - environment
  // @param: auth - auth
  // @param: ref - ref
  // @param: ctx - kubectl context
  list(manifest: any): Observable<any> {
    const params = new HttpParams().append(ID, this.profile.customer_id)

    this.url = this.url;
    return this.http.post<any>(this.url, JSON.stringify(manifest), { params });
  }

}
