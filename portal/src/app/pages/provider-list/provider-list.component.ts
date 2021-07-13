import { CustomerService } from  '../../services/customers.service';
import { Customers } from  '../../schemas/customers';

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit {

  customers: Customers[] = [];
  customer: Customers;

  dataSource;

  public displayedColumns: string[] = [
    'checked',
    'id',
    'name',
    'key',
    'region',
    'endpoint',
    'actions'];

  constructor(private cs: CustomerService,
             private router: Router) {
  }

  ngOnInit(): void {
    this.dataSource = new(MatTableDataSource)
    this.getCustomer();
    this.getCustomers();
  }

  getCustomers(): void {
    this.cs.getCustomers()
    .subscribe(customers => {
      this.customers = customers;
      this.dataSource = new MatTableDataSource(this.customer.providers);
    });
  }

  getCustomer(): void {
    console.log("Customer: ", this.customer);
    this.cs.getCustomer("e8888f86-e8d0-48e2-a9d8-0e456c8abe27")
    .subscribe(data => {
      this.customer = data;
    });
  }

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  public openProvider() {
    this.router.navigate(['provider']);
  }
}
