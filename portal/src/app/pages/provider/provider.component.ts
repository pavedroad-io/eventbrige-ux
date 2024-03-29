import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Provider } from '../../schemas/provider';
import { Customers } from '../../schemas/customers';
import { CustomerService } from '../../services/customers.service';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';

const sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss'],
})
export class ProviderComponent implements OnInit {
  submitted: boolean = false;
  isAddMode: boolean = false;
  id: string = "";
  customer = new Customers();
  public provider: Provider = new Provider();
  providerIndex: number = 0;
  buttonMode: string = "Add";

  onSubmit(form: NgForm) {
    if (this.isAddMode) {
      this.customer.providers.push(this.provider);
    } else {
      console.log(this.providerIndex);
      this.customer.providers[this.providerIndex].name = this.provider.name;
      this.customer.providers[this.providerIndex].key = this.provider.key;
      this.customer.providers[this.providerIndex].credentials =
        this.provider.credentials;
      this.customer.providers[this.providerIndex].region = this.provider.region;
      this.customer.providers[this.providerIndex].endpoint =
        this.provider.endpoint;
    }
    this.customerds.UpdateCustomer(this.customer);
    this.provider = new Provider();
    this.submitted = true;
    form.resetForm();
    this.router.navigate(['providerList']);
  }

  constructor(
    public customerds: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.customerds.share.subscribe((data) => {
      this.customer = data;
    });

    this.id = this.route.snapshot.params['id'];

    if (!this.id) {
      this.buttonMode = 'Add';
      this.isAddMode = true;
    } else {
      this.buttonMode = 'Update';
      // Get the index so we now which element in the
      // array to update when submitted
      this.findProvider(this.id);
    }

    this.provider = new Provider();
  }

  findProvider(name: string) {
    sleep(300).then(() => {
      for (var i = 0; i < this.customer.providers.length; i++) {
        if (this.customer.providers[i].name === name) {
          this.provider.name = this.customer.providers[i].name;
          this.provider.key = this.customer.providers[i].key;
          this.provider.credentials = this.customer.providers[i].credentials;
          this.provider.region = this.customer.providers[i].region;
          this.provider.endpoint = this.customer.providers[i].endpoint;
          this.providerIndex = i;
          return;
        }
      }
    });
  }

  newProvider() {}

  IsReady(): boolean {
    sleep(80).then(() => {
      if (this.customerds.share === undefined) {
        return this.IsReady();
      } else {
        return true;
      }
    });
    return false;
  }
}
