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
  providerSelected: string = "";
  submitted: boolean = false;

  // Query parameter when in edit mode
  id: string;

  buttonMode: string;
  isAddMode: boolean;

  lambdaControl = new FormControl('', Validators.required);

  constructor(public customerds:CustomerService,
             private route: ActivatedRoute,
             private router: Router) { }

   onSubmit(form: NgForm) {
    if ( this.isAddMode ) {
      this.lambdaitem.provider = this.providerSelected;
      this.customer.configuration.triggers.lambda.push(this.lambdaitem);
    } else {
      this.updateLambda();
    }
    this.customerds.UpdateCustomer(this.customer);
    this.submitted = true;
    this.router.navigate(['lambdalist']);
   }

   ngOnInit(): void {
  
    this.id = this.route.snapshot.params['id'];
    this.customer = new Customers();
    this.lambdaitem = new Lambda();

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
        this.displayLambda();
      }
      });
    });
   }

  updateLambda() {
    for (var i = 0; i < this.customer.configuration.triggers.lambda.length; i++) {
        if (this.customer.configuration.triggers.lambda[i].name === this.id) {
          this.lambdaitem.provider=this.providerSelected;
          this.customer.configuration.triggers.lambda[i]  = this.lambdaitem;
          return;
        }
     }
  }
  displayLambda() {
    for (var i = 0; i < this.customer.configuration.triggers.lambda.length; i++) {
        if (this.customer.configuration.triggers.lambda[i].name === this.id) {
          this.lambdaitem = this.customer.configuration.triggers.lambda[i];
          this.providerSelected = this.customer.configuration.triggers.lambda[i].provider;
          return;
        }
     }
  }

}
