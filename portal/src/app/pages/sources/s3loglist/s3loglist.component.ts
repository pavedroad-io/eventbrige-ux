import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NavigationEnd, Router } from '@angular/router';

import { CustomerService } from '../../../services/customers.service';
import { Customers } from '../../../schemas/customers';

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

@Component({
  selector: 'app-s3log-list',
  templateUrl: './s3loglist.component.html',
  styleUrls: ['./s3loglist.component.css'],
})
export class S3loglistComponent implements OnInit {
  customer = new Customers();
  dataSource;

  public displayedColumns: string[] = [
    'checked',
    'provider',
    'name',
    'logFormat',
    'pruneAfterProcessing',
    'filterevents',
    'actions',
  ];

  constructor(private customerds: CustomerService, private router: Router) {}

  ngOnInit(): void {
    sleep(250).then(() => {
      this.customerds.share.subscribe((data: any) => {
        this.customer = data;
        this.dataSource = new MatTableDataSource(this.customer.logs);
        this.dataSource.sort = this.sort;
      });
    });
  }

  @ViewChild(MatSort) sort: MatSort;

  public openS3LogItem() {
    this.router.navigate(['logitem']);
  }

  public deleteLogItem(event) {
    // Add alert box
    this.customer.logs.forEach((item, index) => {
      if (item.name == event.name) this.customer.logs.splice(index, 1);
    });
    this.customerds.UpdateCustomer(this.customer);
  }
}
