import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { concatMap, tap, pluck } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from '../../../services/customers.service';

@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
  styles: [
  ]
})

export class ProfileComponent implements OnInit {
  profile: any = {};
  fullProfile: any = {};
  userdata: any = {};
  appdata: any = {};

  constructor(public auth: AuthService, private http: HttpClient, private cs: CustomerService) {}

  ngOnInit(): void {
    this.auth.user$.subscribe((profile) => {
      this.profile= profile;
      this.http.get(
        encodeURI(`https://pavedroad.us.auth0.com/api/v2/users/`+profile.sub)).subscribe(
      (data) => {
        this.fullProfile = data;
        this.cs.getCustomer(this.fullProfile.app_metadata.eventbridge_customer_id);
      });
    
    });
  }
  getProfile(): any {
    if (this.fullProfile != undefined) {
      return this.fullProfile.app_metadata;
    } else {
      return ""
    }
  }
}
