import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule, Validators, FormControl } from '@angular/forms';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';

// Classes
import { Lambda } from '../../../schemas/lambda';
import { Customers } from '../../../schemas/customers';


// Services
import { CustomerService } from  '../../../services/customers.service';

const sleep = (milliseconds) => {
 return new Promise(resolve => setTimeout(resolve, milliseconds))
}

@Component({
  selector: 'app-lambda',
  templateUrl: './lambda.component.html',
  styleUrls: ['./lambda.component.css']
})
export class LambdaComponent implements OnInit {
  lambdaitem: Lambda; // A lamda configuratione
  customer: Customers; // A customer with functions 
  funcItemIdx: number; // offset of a log line in the array
  providerSelected: any;
  submitted: boolean = false;

  // Query parameter when in edit mode
  id: string;

  buttonMode: string;
  isAddMode: boolean;

  lambdaControl = new FormControl('', Validators.required);

  constructor(public customerds:CustomerService,
             private route: ActivatedRoute,
             private router: Router) { }


  //constructor() { }

   ngOnInit(): void {
  
    this.providerSelected = "aws-west";
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
    this.lambdaitem = new Lambda();
    sleep(250).then(() => {
      this.customerds.share.subscribe((data: any) => {
      this.customer = data;
      });
    });
   }

   onSubmit(form: NgForm) {
    if ( this.isAddMode ) {
      this.lambdaitem.provider = this.providerSelected.name;
      this.customer.configuration.triggers.lambda.push(this.lambdaitem);
    }
    this.customerds.Save(this.customer);
    this.lambdaitem = new Lambda();
    this.submitted = true;
//    form.resetForm();
    this.router.navigate(['lambdalist']);
     console.log(this.lambdaitem);
   }

}
