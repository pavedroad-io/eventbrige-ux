import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { concatMap, tap, pluck } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
  styles: [
  ]
})

export class ProfileComponent implements OnInit {
  profile: {};
  fullProfile: {};
  userdata = {};
  appdata = {};

  constructor(public auth: AuthService, private http: HttpClient) {}

  ngOnInit(): void {
    this.auth.user$.subscribe((profile) => {
      this.profile= profile;
      this.http.get(
        encodeURI(`https://pavedroad.us.auth0.com/api/v2/users/`+profile.sub)).subscribe(
      (data) => {
        this.fullProfile = data;
        console.log(this.fullProfile);
      });
    
    });

  }
}
