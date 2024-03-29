import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MatCustomTableComponent } from '../../../shared/components/mat-custom-table/mat-custom-table.component';

import { CustomerService } from '../../../services/customers.service';
import { Customers } from '../../../schemas/customers';
//import { Sources } from '../../../schemas/sources';

@Component({
  selector: 'app-list-all-workflows',
  templateUrl: './list-all-workflows.component.html',
  styleUrls: ['./list-all-workflows.component.scss']
})
export class ListAllWorkflowsComponent implements OnInit {
  data: any[] = Array(0);
  angularRoute: string = 'snssource';
  columns: any[] = Array(0);
  customer = new Customers();
  @ViewChild(MatCustomTableComponent) table!: MatCustomTableComponent;

  constructor(
	  private customerds: CustomerService, 
	  private router: Router) {}


  ngOnInit() {
  //    this.columns = this.source.getColumns();
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

  onToolbarAction(event: any) {
    switch (event) {
      case 'create': {
        this.router.navigate(['editWorkflow']);
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

  onTableAction(event: any) {
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

  public open(url: string) {
    this.router.navigate([url]);
  }

  public delete(event: any) {
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
