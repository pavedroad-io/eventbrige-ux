import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { MatCustomTableModule } from '../../../shared/components/mat-custom-table/mat-custom-table.module';

import { CustomerService } from '../../../services/customers.service';
import { Customers } from '../../../schemas/customers';

@Component({
  selector: 'app-snslist',
  templateUrl: './snslist.component.html',
  styleUrls: ['./snslist.component.scss'],
})
export class SnslistComponent implements OnInit {
  customer = new Customers();
  data: any[];
  angularRoute: string = 'snssource';

  columns = [
    { columnDef: 'name', header: 'Name' },
    { columnDef: 'region', header: 'Region' },
    { columnDef: 'provider', header: 'Provider' },
    { columnDef: 'role', header: 'Role' },
    { columnDef: 'topic', header: 'Topic' },
    { columnDef: 'methods', header: 'Methods' },
  ];

  constructor(private customerds: CustomerService, private router: Router) {}

  ngOnInit() {
    // get data from API
    this.customerds.share.subscribe((data) => {
      this.customer = data;
      this.flattenSNSSource();
      //this.data = this.customer.configuration.sources.sns;
    });
  }

  flattenSNSSource() {
    if (this.customer.configuration.sources.sns == undefined) {
      return;
    }
    this.customer.configuration.sources.sns.forEach((sns) => {
      if (this.data == undefined) {
        this.data = Array(0);
      }
      this.data.push(sns.flatten());
    });
  }

  onTableAction(event) {
    if (event.value.name == '' || event.value.name == undefined) {
      alert('SNS event has no name');
    }

    switch (event.name) {
      case 'edit':
        const editRoute = this.angularRoute + '/' + event.value.name;
        this.open(editRoute);
      case 'view':
        const viewRoute = this.angularRoute + '/' + event.value.name;
        this.open(viewRoute);
      case 'delete':
	     this.delete(event);
      default:
        console.log('Error: invalid event type: ', event);
    }
    console.log('event', event.name); // edit, delete, or view
    console.log('event', event.value);
  }

  public open(url) {
    this.router.navigate(['snssource']);
  }

  public delete(event) {
    this.customer.configuration.sources.sns.forEach((sns, index) => {
      if (sns.metadata.name == event.value.name)
        this.customer.configuration.sources.sns.splice(index, 1);
    });
    this.customerds.UpdateCustomer(this.customer);
  }
}
