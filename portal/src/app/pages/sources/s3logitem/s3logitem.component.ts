// Angular 
import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule, Validators, FormControl } from '@angular/forms';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';

// Classes
import { Log } from '../../../schemas/log';
import { FilterEvents } from '../../../schemas/filterevents';
import { Customers } from '../../../schemas/customers';


// Services
import { CustomerService } from  '../../../services/customers.service';

const sleep = (milliseconds) => {
 return new Promise(resolve => setTimeout(resolve, milliseconds))
}


@Component({
  selector: 'app-s3logitem',
  templateUrl: './s3logitem.component.html',
  styleUrls: ['./s3logitem.component.css']
})
export class S3logitemComponent implements OnInit {

  logitem: Log; // A log line
  customer: Customers; // A customer with log arrary
  logItemIdx: number; // offset of a log line in the array
  providerSelected: any;
  formatSelected: string;
  submitted: boolean = false;

  // Query parameter when in edit mode
  id: string;

  buttonMode: string;
  isAddMode: boolean;

  providerControl = new FormControl('', Validators.required);

  constructor(public customerds:CustomerService,
             private route: ActivatedRoute,
             private router: Router) { }

  onSubmit(form: NgForm) {
    if ( this.isAddMode ) {
      this.logitem.provider=this.providerSelected;
      this.customer.logs.push(this.logitem);
    } else {
      this.updateLogData();
    }
    this.customerds.UpdateCustomer(this.customer);
    this.submitted = true;
    this.router.navigate(['loglist']);
  }

  ngOnInit(): void {
    this.providerSelected = "";
    this.formatSelected = "s3";
    this.id = this.route.snapshot.params['id'];
    this.customer = new Customers();
    this.logitem = new Log();

    if (!this.id) {
      this.buttonMode = "Add";
      this.isAddMode = true;
    }
    else {
      this.buttonMode = "Update";
      this.isAddMode = false;
    }


    sleep(250).then(() => {
      this.customerds.share.subscribe((data: any) => {
      this.customer = data;
      if ( !this.isAddMode ) {
        this.displayLogData();
      }
      });
    });
  }

  updateLogData() {
    for (var i = 0; i < this.customer.logs.length; i++) {
        if (this.customer.logs[i].name === this.id) {
          this.logitem.provider=this.providerSelected;
          this.customer.logs[i]  = this.logitem;
          return;
        }
     }
  }
  displayLogData() {
    for (var i = 0; i < this.customer.logs.length; i++) {
        if (this.customer.logs[i].name === this.id) {
          this.logitem = this.customer.logs[i];
          this.providerSelected = this.customer.logs[i].provider;
          return;
        }
     }
  }

}
