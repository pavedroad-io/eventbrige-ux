import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { MatCustomTableModule } from '../../../shared/components/mat-custom-table/mat-custom-table.module';
import { MatCustomTableComponent } from '../../../shared/components/mat-custom-table/mat-custom-table.component';

import { CustomerService } from '../../../services/customers.service';
import { Customers } from '../../../schemas/customers';
import { Sources } from '../../../schemas/sources';

@Component({
  selector: 'app-list-all-sources',
  templateUrl: './list-all-sources.component.html',
  styleUrls: ['./list-all-sources.component.scss'],
})
export class ListAllSourcesComponent implements OnInit, AfterViewInit {
  source = new Sources();
  customer = new Customers();
  data: any[] = Array(0);
  angularRoute: string = 'snssource';
  columns: any[] = Array(0);
  @ViewChild(MatCustomTableComponent) table: MatCustomTableComponent;

  constructor(private customerds: CustomerService, private router: Router) {}

  ngOnInit() {
      this.columns = this.source.getColumns();
  }

  ngAfterViewInit() {
    this.customerds.share.subscribe((resp) => {
      if (resp == undefined) {
        return;
      }
      this.customer = resp;
      if (this.customer.configuration.sources.sns.length == 0) {
        return;
      }
      this.data = this.source.tableView(this.customer.configuration.sources);
      this.table.dataset = this.data;
      this.table.reload();
    });
  }

  onToolbarAction(event) {
    switch (event) {
      case 'create': {
        this.router.navigate(['newservice']);
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
        //this.table.reload();
        //location.reload();
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
    this.router.navigate([url]);
  }

  public delete(event) {
    this.customer.configuration.sources.sns.forEach((sns, index) => {
      if (sns.snsmetadata.name == event.value.name)
        this.customer.configuration.sources.sns.splice(index, 1);
    });
    this.customerds.UpdateCustomer(this.customer);
    this.source = this.customer.configuration.sources;
    this.table.reload();
  }
}
