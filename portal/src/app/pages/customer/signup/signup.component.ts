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
  svc: SaaSService

  eventbridgeConfig: Customers;
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

    this.id = this.route.snapshot.params['id'];
    if (!this.id) {
    //  this.buttonMode = "Add";
      this.addMode = true;
      this.formtitle = "Welcome please enter your company information";
    }
    else {
      this.addMode = false;
      this.formtitle = "Updating your organization";
     // this.buttonMode = "Update";
    }

    sleep(250).then (() => {
      this.customerds.share.subscribe((data: any) => {
        this.eventbridgeConfig = data;
      });

     let t = new Date();
     let eb: SaaSService = {name:"Event orchestrator", plan:"basic", configKey:this.eventbridgeConfig.customersuuid, active: true, updated: t, created: t};
     this.svc=eb;
     this.org.services.push(eb);

     let as = <FormArray>this.companyFG.get('services');
     let ns = new FormControl('eb');
     ns.setValue(this.svc);
     as.push(ns)

     this.dataSource = new MatTableDataSource(this.org.services);
     this.dataSource.sort = this.sort;
    });

  }
  
  @ViewChild(MatSort) sort: MatSort;


  onSubmit(form: NgForm){
    if ( this.addMode ) {
      this.org = this.companyFG.value;
      this.organizationds.createOrganization(this.org).subscribe(
            res => {
        console.log("New org is: ", res);
        this.org = res;});
    } else {

    }
    this.submitted = true;
    /*
    if ( this.isAddMode ) {
      this.customer.providers.push(this.provider);
    } else {
      console.log(this.providerIndex);
      this.customer.providers[this.providerIndex].name = this.provider.name;
      this.customer.providers[this.providerIndex].key = this.provider.key;
      this.customer.providers[this.providerIndex].credentials = this.provider.credentials;
      this.customer.providers[this.providerIndex].region = this.provider.region;
      this.customer.providers[this.providerIndex].endpoint = this.provider.endpoint;
    }
    this.customerds.Save(this.customer);
    this.provider = new Provider();
    form.resetForm();
    this.router.navigate(['providerList']);
   */
  }

}
