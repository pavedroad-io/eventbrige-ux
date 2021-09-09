import { Component, OnInit, Directive, AfterViewInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { concatMap, tap, pluck } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from '../../../services/customers.service';
import { environment } from '../../../../environments/environment';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
  styles: [],
})
export class ProfileComponent implements OnInit {
  profile: any = {};
  fullProfile: any = {};
  userdata: any = {};
  appdata: any = {};

  constructor(
    public auth: AuthService,
    private http: HttpClient,
    private cs: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.auth.user$.subscribe((profile) => {
      this.profile = profile;
      this.http
        .get(encodeURI(environment.Audience + 'users/' + profile.sub))
        .subscribe((data) => {
          this.fullProfile = data;
          if (this.fullProfile.app_metadata == undefined) {
            // This is a new client get the org information so it can be saved
            this.router.navigate(['organization']);
          } else {
            this.cs.getCustomer(
              this.fullProfile.app_metadata.eventbrid_config_id
            );
            this.router.navigate(['']);
          }
        });
    });
  }

  getProfile(): any {
    if (this.fullProfile != undefined) {
      return this.fullProfile.app_metadata;
    } else {
      return '';
    }
  }
}
