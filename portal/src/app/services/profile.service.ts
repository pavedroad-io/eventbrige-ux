import { environment} from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';
import { AuthService } from '@auth0/auth0-angular';

const httpOptions = {
  observe: 'response',
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  }),
};

@Injectable({providedIn: 'root'})
export class ProfileService {
  profile: any = {};
  fullProfile: any = {};
  orgID: string;
  ebConf: string;
  newClient: boolean = false;

  public ctx;
  public share;

  constructor(public auth: AuthService, private http: HttpClient) {
    this.ctx = new BehaviorSubject<any>(this.profile);
    this.share = this.ctx.asObservable();
    this.ProfileLoad();
  }


  ProfileLoad(): void {
    this.auth.user$.subscribe((profile) => {
      this.profile=profile;
      this.http.get(
        encodeURI(environment.Audience+"users/"+profile.sub)).subscribe(
          (data) => {
            this.fullProfile = data;
	    if (this.fullProfile.appdata == undefined) {
	      // This is a new client get the org information so it can be saved
              console.log("New client detected")
              this.newClient = true
	    }
            this.ctx.next(this.profile);
        });
    });
  }
}