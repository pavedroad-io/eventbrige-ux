import { Component, OnInit, Directive, AfterViewInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { concatMap, tap, pluck } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { NavigationEnd, Router } from '@angular/router';

// PR Services
import { environment } from '../../../../environments/environment';
import { ProfileService } from '../../../services/profile.service';
import { OrganizationService } from '../../../services/organization.service';
import { CustomerService } from 'src/app/services/customers.service';

import { SaaSService } from 'src/app/schemas/saas_service';
import { ServiceConstants } from 'src/app/shared/consts/serviceConstants';

const sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
  styles: [],
})
export class ProfileComponent implements OnInit {
  fullProfile: any = {};
  userdata: any = {};
  appdata: any = {};

  constructor(
    public auth: AuthService,
    private http: HttpClient,
    private organizationService: OrganizationService,
    private customerService: CustomerService,
    private router: Router,
    private profileSvc: ProfileService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.profileSvc.share.subscribe((data: any) => {
      this.fullProfile = this.profileSvc.fullProfile;
      if (this.profileSvc.fullProfile == undefined) {
        return;
      }

      // New company
      if (this.profileSvc.fullProfile?.app_metadata?.customer_id == undefined) {
        let r = 'organization/';
        this.router.navigate([r]);
      } else {
        this.organizationService.loadOrg(
          this.profileSvc.fullProfile.app_metadata.customer_id
        );
        this.organizationService.share.subscribe((data: any) => {
          // If the org is not loaded or eb config is already defined
          // just return
          if (
            data == undefined ||
            this.profileSvc.fullProfile.app_metadata.eventbrid_config_id != ''
          ) {
            return;
          }

          const findSvc: SaaSService = new SaaSService(
            'dummy',
            'dummy',
            true,
            0,
            {
              softLimitSources: 0,
              hardLimitSources: 0,
              softLimitTriggers: 0,
              hardLimitTriggers: 0,
            }
          );

          const eb = findSvc.find(
            data.services,
            ServiceConstants.EVENTORCHESTRATOR
          );

          if (eb != undefined) {
            this.profileSvc.fullProfile.app_metadata.eventbrid_config_id =
              eb.configkey;
            this.customerService.getCustomer(eb.configkey);
          }
        });
      }
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
