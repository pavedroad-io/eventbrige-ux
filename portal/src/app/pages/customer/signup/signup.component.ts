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
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { from, Observable } from 'rxjs';

import { Customers } from '../../../schemas/customers';
import { Organization } from '../../../schemas/organization';
import { User } from '../../../schemas/users';
import { SaaSService } from '../../../schemas/saas_service';
import { Billing } from '../../../schemas/billing';
import { Auth0User } from '../../../schemas/auth0user';

import { CustomerService } from '../../../services/customers.service';
import { OrganizationService } from '../../../services/organization.service';
import { ProfileService } from '../../../services/profile.service';

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  org: Organization = new Organization();
  eoSvc: SaaSService;
  wasabiSvc: SaaSService;
  S3Svc: SaaSService;
  fullProfile: Auth0User = new Auth0User();

  eventbridgeConfig: Customers = new Customers();
  dataSource: any;

  companyFG: any;
  titleAlert: string = 'This field is required';
  formtitle: string = 'Update organization';

  addMode: boolean = true;
  submitted = false;
  id: string;

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
      this.fullProfile = data;
    });

    // load eb conf
    this.customerds.share.subscribe(data => {
      this.eventbridgeConfig = data;
      this.updateEventBridgeConfigKey();
    });

    this.id = this.route.snapshot.params['id'];
    if (!this.id) {
      this.addMode = true;
      this.formtitle = 'Welcome please enter your company information';
      this.addDefaultServices();
    } else {
      this.addMode = false;
      this.formtitle = 'Updating your organization';

      // load org
      this.organizationds.loadOrg(this.id);
      this.organizationds.share.subscribe((data) => {
        console.log('signup org: ', data);
        this.org = data;
        this.companyFG.reset(this.org);
        this.dataSource = new MatTableDataSource(this.org.services);
        this.dataSource.sort = this.sort;
      });
    }

    this.dataSource = new MatTableDataSource(this.org.services);
    this.dataSource.sort = this.sort;
  }

  @ViewChild(MatSort) sort: MatSort;

  addDefaultServices() {
    // We don't know the configKey until the POST is complete
    this.customerds.createCustomer(this.eventbridgeConfig);

    let t = new Date();
    this.eoSvc = new SaaSService('EventOrchestrator', 'trial', true, 30, {
      softLimitSources: 5,
      hardLimitSources: 10,
      softLimitTriggers: 5,
      hardLimitTriggers: 10,
    });
    this.wasabiSvc = new SaaSService('Wasabi-S3', 'trial', true, 30, {
      diskSpace: '1GB',
    });
    this.S3Svc = new SaaSService('AWS-S3', 'trial', true, 30, {});
    this.org.services.push(this.eoSvc);
    this.org.services.push(this.wasabiSvc);
    this.org.services.push(this.S3Svc);
  }

  updateEventBridgeConfigKey() {
    let i = this.findSaaSService('Event orchestrator');
    if (i != -1) {
      this.org.services[i].configKey = this.eventbridgeConfig.customersuuid;
    }
  }

  findSaaSService(name: string) {
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
      this.org.name = this.companyFG.get('name').value;
      this.org.address = this.companyFG.get('address').value;
      this.org.city = this.companyFG.get('city').value;
      this.org.state = this.companyFG.get('state').value;
      this.org.zip = this.companyFG.get('zip').value;
      this.organizationds.createOrganization(this.org).subscribe((res) => {
        this.org = res;

        // this will get set by auth0 in ~1 second but we need it right
        // away for configurations to load
        this.fullProfile.app_metadata.customer_id = this.org.organizationuuid;
        this.fullProfile.app_metadata.eventbrid_config_id =
          this.eoSvc.configKey;
        this.profileds.ctx.next(this.fullProfile);

        // Force AUTH0 reload
        this.profileds.ProfileLoad();
      });
    } else {
      this.org = this.companyFG.value;
      if (this.org.services.length === 0) {
        this.addDefaultServices();
      }
      this.organizationds.UpdateOrganization(this.org);
      this.companyFG.reset();
    }
    this.router.navigate(['home']);
    this.submitted = true;
  }
}
