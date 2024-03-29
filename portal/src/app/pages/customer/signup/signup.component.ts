import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  NgModule,
} from '@angular/core';
import {
  NgForm,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  FormGroupDirective,
} from '@angular/forms';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatCard } from '@angular/material/card';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { from, Observable } from 'rxjs';

import { Customers } from '../../../schemas/customers';
import { Organization } from '../../../schemas/organization';
import { User } from '../../../schemas/users';
import { SaaSService } from '../../../schemas/saas_service';
import { Billing } from '../../../schemas/billing';
import { AppMetadataComponent } from '../../../schemas/app-metadata/app-metadata.component';
import { Auth0User } from '../../../schemas/auth0user';

import { CustomerService } from '../../../services/customers.service';
import { OrganizationService } from '../../../services/organization.service';
import { ProfileService } from '../../../services/profile.service';
import { ServiceConstants } from '../../../shared/consts/serviceConstants';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  org: Organization = new Organization();
  eoSvc: SaaSService | undefined = undefined;
  wasabiSvc: SaaSService | undefined = undefined;
  S3Svc: SaaSService | undefined = undefined;
  fullProfile: Auth0User = new Auth0User();

  eventbridgeConfig: Customers = new Customers();
  dataSource: any;

  companyFG: any;
  titleAlert: string = 'This field is required';
  formtitle: string = 'Update organization';

  addMode: boolean = true;
  updateMetadata: boolean = false;
  submitted: boolean = false;
  id: string = '';

  public displayedColumns: string[] = [
    'name',
    'plan',
    'created',
    'configKey',
    'active',
  ];

  constructor(
    private fb: FormBuilder,
    public customerds: CustomerService,
    public organizationds: OrganizationService,
    public profileds: ProfileService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.companyFG = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.profileds.share.subscribe((data) => {
      if (data == undefined) {
        return;
      }
      this.fullProfile = data;
      this.checkMetaData();
    });

    // load eb conf
    this.customerds.share.subscribe((data) => {
      this.eventbridgeConfig = data;
      this.updateEventBridgeConfigKey();
    });

    this.id = this.route.snapshot.params['id'];
    if (!this.id) {
      this.org = new Organization();
      this.addMode = true;
      this.formtitle = 'Welcome please enter your company information';
      this.addDefaultServices();
      this.updateServices();
    } else {
      this.addMode = false;
      this.formtitle = 'Updating your organization';

      // load org
      this.organizationds.loadOrg(this.id);
      this.organizationds.share.subscribe((data: Organization) => {
        if (data == undefined) {
          return;
        }
        this.org = data;
        this.companyFG.reset(this.org);
        this.verifyServiceConfigs();
        this.updateServices();
      });
    }
  }

  updateServices() {
    if (this.org == undefined) {
      return;
    }
    this.dataSource = new MatTableDataSource(this.org.services);
    this.dataSource.sort = this.sort;
  }

  @ViewChild(MatSort) sort!: MatSort;

  verifyServiceConfigs() {
    if (this.org == undefined) {
      return;
    }
    this.org.services.forEach((svc) => {
      if (svc.name === String(ServiceConstants.EVENTORCHESTRATOR)) {
        if (svc.configkey == '') {
          console.log('Adding missing config for : ', svc.name);
          this.customerds.createCustomer(this.eventbridgeConfig);
        } else {
          this.customerds.getCustomer(svc.configkey);
        }
        this.checkMetaData();
      }

      if (svc.name === String(ServiceConstants.AWSS3)) {
        console.log('Service name: ', svc.name, ' missing config');
      }

      if (svc.name === String(ServiceConstants.WASABIS3)) {
        console.log('Service name: ', svc.name, ' missing config');
      }
    });
  }

  checkMetaData() {
    if (
      this.fullProfile.app_metadata.eventbrid_config_id == '' ||
      this.fullProfile.app_metadata.eventbrid_config_id == undefined
    ) {
      let index = this.findSaaSService(ServiceConstants.EVENTORCHESTRATOR);
      if (index != undefined) {
        this.fullProfile.app_metadata.eventbrid_config_id =
          this.org.services[index].configkey;
        this.updateMetadata = true;
      }
    }
  }

  addDefaultServices() {
    // We don't know the configkey until the POST is complete
    this.customerds.createCustomer(this.eventbridgeConfig);

    let t = new Date();
    this.eoSvc = new SaaSService(
      ServiceConstants.EVENTORCHESTRATOR,
      'trial',
      true,
      30,
      {
        softLimitSources: 5,
        hardLimitSources: 10,
        softLimitTriggers: 5,
        hardLimitTriggers: 10,
      }
    );
    this.wasabiSvc = new SaaSService(
      ServiceConstants.WASABIS3,
      'trial',
      true,
      30,
      {
        diskSpace: '1GB',
      }
    );
    this.S3Svc = new SaaSService(ServiceConstants.AWSS3, 'trial', true, 30, {});
    this.org.services.push(this.eoSvc);
    this.org.services.push(this.wasabiSvc);
    this.org.services.push(this.S3Svc);
  }

  // updateEventBridgeConfigKey in list of services
  // after the configuration has been created
  updateEventBridgeConfigKey() {
    if (this.org?.services == undefined) {
      return;
    }
    const index = this.findSaaSService(ServiceConstants.EVENTORCHESTRATOR);
    if (index != undefined) {
      if (this.org.services[index].configkey == '') {
        this.org.services[index].configkey = this.eventbridgeConfig.customersuuid;
      }
    }
  }

  findSaaSService(name: string) {
    if (this.org?.services == undefined) {
      return;
    }
    for (var i = 0; i < this.org.services.length; i++) {
      if (this.org.services[i].name === name) {
        return i;
      }
    }
    return -1;
  }

  isValid() {
    if (this.eventbridgeConfig.customersuuid == '' || this.companyFG.invalid) {
      return true;
    }
    return false;
  }

  updateEventBridge() {
    this.org.name = this.companyFG.get('name').value;
    this.eventbridgeConfig.name = this.org.name;
    this.customerds.UpdateCustomer(this.eventbridgeConfig);
  }

  onSubmit(form: NgForm) {
    if (this.eventbridgeConfig.customersuuid == '') return;
    if (this.addMode) {
      if (this.org == undefined) {
        this.org = new Organization();
      }
      this.org.name = this.companyFG.get('name').value;
      this.org.address = this.companyFG.get('address').value;
      this.org.city = this.companyFG.get('city').value;
      this.org.state = this.companyFG.get('state').value;
      this.org.zip = this.companyFG.get('zip').value;
      this.organizationds.createOrganization(this.org).subscribe((res) => {
        this.org = res;

        // this will get set by auth0 in ~1 second but we need it right
        // away for configurations to load
        if (this.fullProfile.app_metadata == undefined) {
          this.fullProfile.app_metadata = new AppMetadataComponent();
        }
        this.fullProfile.app_metadata.customer_id = this.org.organizationuuid;

	if (this.eoSvc?.configkey) {
           this.fullProfile.app_metadata.eventbrid_config_id = this.eoSvc.configkey;
	}

        this.profileds.ctx.next(this.fullProfile);

        // Force AUTH0 reload
        this.profileds.ProfileLoad();
      });
    } else {
      if(this.org == undefined) {
        alert('organization object not found');
	return;
      }
      this.org.name = this.companyFG.get('name').value;
      this.org.address = this.companyFG.get('address').value;
      this.org.city = this.companyFG.get('city').value;
      this.org.state = this.companyFG.get('state').value;
      this.org.zip = this.companyFG.get('zip').value;
      if (this.org.services.length === 0) {
        this.addDefaultServices();
      }
      this.organizationds.UpdateOrganization(this.org, this.updateMetadata);
      this.companyFG.reset();
    }
    this.router.navigate(['home']);
    this.submitted = true;
  }
}
