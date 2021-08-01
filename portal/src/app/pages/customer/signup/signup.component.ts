import { AfterViewInit, Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators, FormArray, FormGroupDirective } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { from, Observable } from 'rxjs';

import { Customers } from '../../../schemas/customers';
import { Organization } from '../../../schemas/organization';
import { User } from '../../../schemas/users';
import { SaaSService } from '../../../schemas/saas_service';
import { Billing } from '../../../schemas/billing';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';

import { CustomerService } from  '../../../services/customers.service';
import { OrganizationService } from  '../../../services/organization.service';



const sleep = (milliseconds) => {
 return new Promise(resolve => setTimeout(resolve, milliseconds))
}


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  org: Organization = new Organization();
  svc: SaaSService = new SaaSService();

  eventbridgeConfig: Customers = new Customers();
  dataSource: any;

  companyFG: any;
  titleAlert: string = 'This field is required';
  formtitle: string = "Update organization";

  addMode: boolean = true;
  submitted = false;
  id: string;

  public displayedColumns: string[] = [
    'name',
    'plan',
    'created',
    'configKey',
    'active'];

  constructor(private fb: FormBuilder,
             public customerds:CustomerService,
             public organizationds:OrganizationService,
             private route: ActivatedRoute,
             private router: Router) {

     this.companyFG = this.fb.group({
       organizationuuid: [' ', Validators.required],
       name: [' ', Validators.required],
       address: [' ', Validators.required],
       city: [' ', Validators.required],
       state: [' ', Validators.required],
       zip: [' ', Validators.required],
       services: this.fb.array([ ]),
       members: this.fb.array([ ])
     });
     
  }

  ngOnInit(): void {

    sleep(1000).then (() => {
      this.customerds.share.subscribe((data: any) => {
        this.eventbridgeConfig = data;
        this.updateEventBridgeConfigKey();
      });

    this.id = this.route.snapshot.params['id'];
    if (!this.id) {
    //  this.buttonMode = "Add";
      this.addMode = true;
      this.formtitle = "Welcome please enter your company information";
      this.addEventBridge();
 
    }
    else {
     // this.buttonMode = "Update";
      this.addMode = false;
      this.formtitle = "Updating your organization";

      sleep(250).then (() => {
      this.organizationds.share.subscribe((data: any) => {
        this.org = data; 
        console.log("new data", this.org);
        this.companyFG.reset(this.org);
        });
      });
      this.organizationds.loadOrg(this.id);
    }

     this.dataSource = new MatTableDataSource(this.org.services);
     this.dataSource.sort = this.sort;
    });

  }
  
  @ViewChild(MatSort) sort: MatSort;
  
  addEventBridge() {
    // We don't know the configKey until the POST is complete
    this.customerds.createCustomer(this.eventbridgeConfig);
        let t = new Date();
        this.svc = {
          name:"Event orchestrator", 
          plan:"basic", 
          configKey: '', 
          active: true, 
          updated: t, 
          created: t};

        this.org.services.push(this.svc);
        var as = <FormArray>this.companyFG.get('services');
        as.reset(this.org.services);
  }

  updateEventBridgeConfigKey() {
    let i = this.findSaaSService("Event orchestrator");
    if ( i != -1 ) {
      this.org.services[i].configKey = this.eventbridgeConfig.customersuuid;
    } else {
      this.addEventBridge();
      this.org.services[0].configKey = this.eventbridgeConfig.customersuuid;
    }
  }

  findSaaSService(name: string) {
    for (var i = 0; i < this.org.services.length; i++) {
       if (this.org.services[i].name === name) {
         return i
       }
    }
    return -1
  }

  updateEventBridge(){
    this.org.name = this.companyFG.get('name').value;
    this.eventbridgeConfig.name = this.org.name;
    this.customerds.UpdateCustomer(this.eventbridgeConfig);
  }

  onSubmit(form: NgForm){
    if ( this.addMode ) {
      this.org = this.companyFG.value;
      this.organizationds.createOrganization(this.org).subscribe(
            res => {
        this.org = res;});
    } else {
      this.org = this.companyFG.value;
      if ( this.org.services.length === 0 ){
        this.addEventBridge();
      }
      this.organizationds.UpdateOrganization(this.org);
      this.companyFG.reset();
      this.router.navigate(['']);
    }
    this.submitted = true;
  }

}
