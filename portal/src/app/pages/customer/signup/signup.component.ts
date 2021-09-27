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
  svc: SaaSService = new SaaSService();
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
      organizationuuid: [' ', Validators.required],
      name: [' ', Validators.required],
      address: [' ', Validators.required],
      city: [' ', Validators.required],
      state: [' ', Validators.required],
      zip: [' ', Validators.required],
      services: this.fb.array([]),
      members: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    sleep(1000).then(() => {
      this.customerds.share.subscribe((data: any) => {
        this.eventbridgeConfig = data;
        this.updateEventBridgeConfigKey();
      });
    });
    sleep(1000).then(() => {
      this.profileds.share.subscribe((data: any) => {
        this.fullProfile = data;
      });
    });

    this.id = this.route.snapshot.params['id'];
    if (!this.id) {
      //  this.buttonMode = "Add";
      this.addMode = true;
      this.formtitle = 'Welcome please enter your company information';
      this.addEventBridge();
    } else {
      // this.buttonMode = "Update";
      this.addMode = false;
      this.formtitle = 'Updating your organization';

      sleep(250).then(() => {
        this.organizationds.share.subscribe((data: any) => {
          this.org = data;
          this.companyFG.reset(this.org);
          this.dataSource = new MatTableDataSource(this.org.services);
          this.dataSource.sort = this.sort;
        });
      });
      this.organizationds.loadOrg(this.id);
    }

    this.dataSource = new MatTableDataSource(this.org.services);
    this.dataSource.sort = this.sort;
  }

  @ViewChild(MatSort) sort: MatSort;

  addEventBridge() {
    // We don't know the configKey until the POST is complete
    this.customerds.createCustomer(this.eventbridgeConfig);
    let t = new Date();
    this.svc = {
      name: 'Event orchestrator',
      plan: 'basic',
      configKey: '',
      active: true,
      updated: t,
      created: t,
    };

    this.org.services.push(this.svc);
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

  updateEventBridge() {
    this.org.name = this.companyFG.get('name').value;
    this.eventbridgeConfig.name = this.org.name;
    this.customerds.UpdateCustomer(this.eventbridgeConfig);
  }

  onSubmit(form: NgForm) {
    if (this.addMode) {
      this.org.name = this.companyFG.get('name').value;
      this.org.address = this.companyFG.get('address').value;
      this.org.city = this.companyFG.get('city').value;
      this.org.state = this.companyFG.get('state').value;
      this.org.zip = this.companyFG.get('zip').value;
      this.organizationds.createOrganization(this.org).subscribe((res) => {
        this.org = res;
      });

      // this will get set by auth0 in ~1 second but we need it right
      // away for configurations to load
      debugger;
      this.fullProfile.app_metadata.customer_id =
        this.org.organizationuuid;
      this.fullProfile.app_metadata.eventbrid_config_id =
        this.svc.configKey;
      this.profileds.ctx.next(this.fullProfile);

      // Force AUTH0 reload
      this.profileds.ProfileLoad();
    } else {
      this.org = this.companyFG.value;
      if (this.org.services.length === 0) {
        this.addEventBridge();
      }
      this.organizationds.UpdateOrganization(this.org);
      this.companyFG.reset();
    }
    this.router.navigate(['home']);
    this.submitted = true;
  }
}
