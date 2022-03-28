import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  Input,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NavigationEnd, Router } from '@angular/router';

import { CustomerService } from '../../../services/customers.service';
import { Customers } from '../../../schemas/customers';

@Component({
  selector: 'app-snslist',
  templateUrl: './snslist.component.html',
  styleUrls: ['./snslist.component.scss'],
})
export class SnslistComponent implements OnInit {
  customer = new Customers();
  dataSource;
  @ViewChild(MatSort) sort: MatSort;

  // @Input() public displayedColumns: string[] = ['checked', 'name', 'region', 'methods', 'provider', 'actions'];
  @Input() public displayedColumns: string[] = ['checked', 
	  'metadata.name', 'actions'];

  /*
     'Region',
     'Methods',
     'Provider',
    */
  // TODO: generate from Type instead of hardcoding
  @Input() columns:Array<any> = [
    { heading: 'provider', field: 'awsSecret.key' },
    { heading: 'name', field: 'metadata.name' },
    { heading: 'namespace', field: 'metadata.namespace' },
    { heading: 'source', field: 'metadata.source' },
    { heading: 'region', field: 'region' },
    { heading: 'role', field: 'roleARN' },
    { heading: 'topic topic', field: 'topicARN' },
    { heading: 'endpoint', field: 'webhook.endpoint' },
    { heading: 'methods', field: 'webhook.methods' },
    { heading: 'port', field: 'webhook.port' }
  ];

  constructor(private customerds: CustomerService, private router: Router) {}

  ngOnInit(): void {
    this.customerds.share.subscribe((data) => {
      this.customer = data;
      const sns = this.customer.configuration.sources.sns[0];

      this.dataSource = new MatTableDataSource(
        this.customer.configuration.sources.sns
      );
      this.dataSource.sort = this.sort;
    });
  }

  public openSNSItem() {
    this.router.navigate(['snssource']);
  }

  public deletesnsItem(event) {
    //    this.customer.logs.forEach((item, index) => {
    //      if (item.name == event.name) this.customer.logs.splice(index, 1);
    //    });
    this.customerds.UpdateCustomer(this.customer);
  }
}
