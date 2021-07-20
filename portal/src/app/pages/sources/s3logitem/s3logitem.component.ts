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
      console.log(this.logitem);
      this.logitem.provider=this.providerSelected.name;
      this.customer.logs.push(this.logitem);
      console.log(this.customer);
    }
    this.customerds.Save(this.customer);
    this.logitem = new Log();
    this.submitted = true;
//    form.resetForm();
    this.router.navigate(['loglist']);
  }

  ngOnInit(): void {
    this.providerSelected = "aws-west";
    this.formatSelected = "s3";
    this.id = this.route.snapshot.params['id'];

    if (!this.id) {
      this.buttonMode = "Add";
      this.isAddMode = true;
    }
    else {
      this.buttonMode = "Update";
      // Get the index so we now which element in the
      // array to update when submitted
      //this.findProvider(this.id);
    }


    this.customer = new Customers();
    this.logitem = new Log();
    sleep(250).then(() => {
      this.customerds.share.subscribe((data: any) => {
      this.customer = data;
      });
    });
  }

}
