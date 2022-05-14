import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MatCustomTableComponent } from '../../../shared/components/mat-custom-table/mat-custom-table.component';

import { Customers } from '../../../schemas/customers';
import { Workflows } from '../../../schemas/workflow/workflows';


import { CustomerService } from '../../../services/customers.service';


@Component({
  selector: 'app-list-all-code',
  templateUrl: './list-all-code.component.html',
  styleUrls: ['./list-all-code.component.scss']
})
export class ListAllCodeComponent implements OnInit {
  data: any[] = Array(0);
  angularRoute: string = 'snssource';
  columns: any[] = Array(0);
  customer = new Customers();
  @ViewChild(MatCustomTableComponent) table: MatCustomTableComponent;

  constructor(
	  private customerds: CustomerService, 
	  private router: Router) {}

  ngOnInit(): void {
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
      //this.data = this.source.tableView(this.customer.configuration.sources);
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
	  /*
    this.customer.configuration.sources.sns.forEach((sns, index) => {
      if (sns.snsmetadata.name == event.value.name)
        this.customer.configuration.sources.sns.splice(index, 1);
    });
    this.customerds.UpdateCustomer(this.customer);
    this.source = this.customer.configuration.sources;
    this.table.reload();
 */
  }


}
