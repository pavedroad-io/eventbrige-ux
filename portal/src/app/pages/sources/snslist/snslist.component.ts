import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { MatCustomTableModule } from '../../../shared/components/mat-custom-table/mat-custom-table.module';
import { MatCustomTableComponent } from '../../../shared/components/mat-custom-table/mat-custom-table.component';

import { CustomerService } from '../../../services/customers.service';
import { Customers } from '../../../schemas/customers';
import { SNSSource } from '../../../schemas/sources/sns';

@Component({
  selector: 'app-snslist',
  templateUrl: './snslist.component.html',
  styleUrls: ['./snslist.component.scss'],
})
export class SnslistComponent implements OnInit {
  customer = new Customers();
  data: any[] = Array(0);
  angularRoute: string = 'snssource';
  @ViewChild(MatCustomTableComponent) table: MatCustomTableComponent;

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
      if (data == undefined || data.configuration.sources.sns.length == 0) {
        return;
      }
      this.customer = data;
      this.flattenSNSSource();
      this.table.dataset = this.data;
      this.table.reload();
    });
  }

  ngAfterViewInit() {
  }

  flattenSNSSource() {
    if (
      this.customer.configuration.sources.sns == undefined ||
      this.customer.configuration.sources.sns.length == 0
    ) {
      return;
    }
    var build: any[] = Array(0);
    var snsSource: SNSSource;
    this.customer.configuration.sources.sns.forEach((sns) => {
      snsSource = new SNSSource(sns);
      build.push(snsSource.flatten());
    });
    this.data = build;
  }

  onToolbarAction(event) {
    switch (event) {
      case 'create': {
        this.router.navigate(['snssource']);
        break;
      }
      case 'delete': {
        console.log('event: ', event);
        break;
      }
      case 'refresh': {
        console.log('event: ', event);
        break;
      }
    }
  }

  onTableAction(event) {
    if (event.value.name == '' || event.value.name == undefined) {
      alert('SNS event has no name');
    }

    switch (event.name) {
      case 'edit':
        const editRoute = this.angularRoute + '/' + event.value.name;
        this.open(editRoute);
        this.table.reload();
	location.reload();
	break;
      case 'view':
        const viewRoute = this.angularRoute + '/' + event.value.name;
        this.open(viewRoute);
	break;
      case 'delete':
        this.delete(event);
        this.table.reload();
	location.reload();
	break;
      default:
        console.log('Error: invalid event type: ', event);
    }
  }

  public open(url) {
    this.router.navigate(['snssource']);
  }

  public delete(event) {
    this.customer.configuration.sources.sns.forEach((sns, index) => {
      if (sns.snsmetadata.name == event.value.name)
        this.customer.configuration.sources.sns.splice(index, 1);
    });
    this.customerds.UpdateCustomer(this.customer);
    this.flattenSNSSource();
    this.table.reload();
  }
}
