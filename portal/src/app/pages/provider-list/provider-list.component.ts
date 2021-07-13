import { CustomerService, ICustomerResponse } from  '../../services/customers.service';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit {

  data: ICustomerResponse[];
  dataSource;
  public displayedColumns: string[] = ['checked', 'id', 'name', 'key', 'created', 'updated', 'actions'];

  constructor(private cs: CustomerService) {
  }

  ngOnInit(): void {
    this.data = this.cs.getServices()
    this.dataSource = new MatTableDataSource(this.data);
  }

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
