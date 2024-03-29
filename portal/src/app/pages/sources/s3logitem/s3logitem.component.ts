// Angular
import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule, Validators, FormControl } from '@angular/forms';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';

// Classes
import { Log } from '../../../schemas/log';
import { FilterEvents } from '../../../schemas/filterevents';
import { Customers } from '../../../schemas/customers';

// Services
import { CustomerService } from '../../../services/customers.service';

const sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

@Component({
  selector: 'app-s3logitem',
  templateUrl: './s3logitem.component.html',
  styleUrls: ['./s3logitem.component.scss'],
})
export class S3logitemComponent implements OnInit {
  logitem: Log = new Log(); // A log line
  customer: Customers = new Customers(); // A customer with log arrary
  logItemIdx: number = 0; // offset of a log line in the array
  providerSelected: string = '';
  formatSelected: string = 's3';
  submitted: boolean = false;
  methods: string = '';
  types: string = '';
  api: string = '';

  // Query parameter when in edit mode
  id: string = '';

  buttonMode: string = '';
  isAddMode: boolean = true;

  providerControl = new FormControl('', Validators.required);

  constructor(
    public customerds: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  onSubmit(form: NgForm) {
    if (this.isAddMode) {
      this.logitem.provider = this.providerSelected;
      this.logitem.filterevents.matchedHTTPMethods = this.methods.split(',');
      this.logitem.filterevents.matchedAPI = this.api.split(',');
      this.logitem.filterevents.matchedResouceTypes = this.types.split(',');
      this.customer.logs.push(this.logitem);
    } else {
      this.updateLogData();
    }
    this.customerds.UpdateCustomer(this.customer);
    this.submitted = true;
    this.router.navigate(['loglist']);
  }

  ngOnInit(): void {

    if (!this.id) {
      this.buttonMode = 'Add';
      this.isAddMode = true;
    } else {
      this.buttonMode = 'Update';
      this.isAddMode = false;
    }

    sleep(250).then(() => {
      this.customerds.share.subscribe((data: any) => {
        this.customer = data;
        if (!this.isAddMode) {
          this.displayLogData();
        }
      });
    });
  }

  updateLogData() {
    for (var i = 0; i < this.customer.logs.length; i++) {
      if (this.customer.logs[i].name === this.id) {
        this.logitem.provider = this.providerSelected;
        this.logitem.filterevents.matchedHTTPMethods = this.methods.split(',');
        this.logitem.filterevents.matchedAPI = this.api.split(',');
        this.logitem.filterevents.matchedResouceTypes = this.types.split(',');
        this.customer.logs[i] = this.logitem;
        return;
      }
    }
  }
  displayLogData() {
    for (var i = 0; i < this.customer.logs.length; i++) {
      if (this.customer.logs[i].name === this.id) {
        this.logitem = this.customer.logs[i];
        this.providerSelected = this.customer.logs[i].provider;
        this.methods = this.logitem.filterevents.matchedHTTPMethods.join(',');
        this.api = this.logitem.filterevents.matchedAPI.join(',');
        this.types = this.logitem.filterevents.matchedResouceTypes.join(',');
        return;
      }
    }
  }
}
