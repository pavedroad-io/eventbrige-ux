import { CustomerService } from '../../services/customers.service';
import { Customers } from '../../schemas/customers';
import { DeleteDialogComponent } from '../../core/components/delete-dialog/delete-dialog.component';

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NavigationEnd, Router } from '@angular/router';

const sleep = (milliseconds:number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.scss'],
})
export class ProviderListComponent implements OnInit {
  customer = new Customers();
  dataSource!: any;
  @ViewChild(MatSort) sort!: MatSort;


  public displayedColumns: string[] = [
    'checked',
    'id',
    'name',
    'key',
    'region',
    'endpoint',
    'actions',
  ];

  constructor(private customerds: CustomerService, private router: Router) {}

  ngOnInit(): void {
    this.customerds.share.subscribe((data) => {
      if (data.customersuuid == '') {
        return;
      }
      this.customer = data;
      this.dataSource = new MatTableDataSource(this.customer.providers);
      this.dataSource.sort = this.sort;
    });
  }

  public openProvider() {
    this.router.navigate(['provider']);
  }

  public editProvider(event: any) {
    //    console.log(event);
  }

  public deleteProvider(event: any) {
    // Add alert box
    this.customer.providers.forEach((item, index) => {
      if (item.name == event.name) this.customer.providers.splice(index, 1);
    });
    this.customerds.UpdateCustomer(this.customer);
  }

  ngAfterViewInit() {}
}
