import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';
import { AuthService } from '@auth0/auth0-angular';
import { appMetadata } from '../schemas/appMetadata';

const httpOptions = {
  observe: 'response',
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({ providedIn: 'root' })
export class ProfileService {
  profile: any = {};
  fullProfile: any = {};
  orgID: string = '';
  ebConf: string = '';
  newClient: boolean = false;

  public ctx;
  public share;

  constructor(public auth: AuthService, private http: HttpClient) {
    this.ctx = new BehaviorSubject<any>(this.fullProfile);
    this.share = this.ctx.asObservable();
    this.ProfileLoad();
  }

  ProfileLoad(): void {
    this.auth.user$.subscribe((profile: any) => {
      this.profile = profile;
      this.http
        .get(encodeURI(environment.Audience + 'users/' + profile.sub))
        .subscribe((data) => {
          this.fullProfile = data;
          this.ctx.next(this.fullProfile);
        });
    });
  }

  updateMetadata(app_metadata: any): void {
    if (this.fullProfile?.app_metadata != undefined) {
      this.fullProfile.app_metadata = app_metadata;
      this.ctx.next(this.fullProfile);
    }
  }
}
