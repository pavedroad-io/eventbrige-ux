// Angular
import { Component, OnInit } from '@angular/core';

import {
  NgForm,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  FormGroupDirective,
} from '@angular/forms';

import { LayoutModule } from '@angular/cdk/layout';

import {
  NavigationEnd,
  Router,
  ActivatedRoute,
  Routes,
  RouterModule,
} from '@angular/router';

// Angular

// PR Components

// PR Services
import { CustomerService } from '../../../../services/customers.service';

// PR Schemas
import { Customers } from '../../../../schemas/customers';
import { Provider } from '../../../../schemas/provider';

// PR Functions
const sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

@Component({
  selector: 'k8s-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.scss'],
})
export class SecretComponent implements OnInit {
  customer: Customers = new Customers(); // A customer an array of providers
  providerSelected: string = '';

  constructor(public customerds: CustomerService) {}

  ngOnInit(): void {
    this.providerSelected = '';
    this.customer = new Customers();
    this.customerds.share.subscribe((data) => (this.customer = data));
  }

  lookup(name: string): Provider {
    let result = new Provider();
    for (const provider of this.customer.providers) {
      if (name === provider.name) {
        return provider;
      }
    }
    return result;
  }
}
