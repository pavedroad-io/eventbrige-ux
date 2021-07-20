import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NavigationEnd, Router } from '@angular/router';

import { CustomerService } from  '../../../services/customers.service';
import { Customers } from  '../../../schemas/customers';
import { Lambda } from '../../../schemas/lambda';

const sleep = (milliseconds) => {
 return new Promise(resolve => setTimeout(resolve, milliseconds))
}


@Component({
  selector: 'app-lambda-list',
  templateUrl: './lambda-list.component.html',
  styleUrls: ['./lambda-list.component.css']
})
export class LambdaListComponent implements OnInit {

  customer = new Customers();
  dataSource;

  public displayedColumns: string[] = [
    'checked',
    'name',
    'provider',
    'functionName',
    'region',
    'actions'];

  constructor(private customerds: CustomerService,
             private router: Router) {
  }


  ngOnInit(): void {
    sleep(250).then(() => {
      this.customerds.share.subscribe((data: any) => {
      this.customer = data;
      this.dataSource = new MatTableDataSource(this.customer.configuration.triggers.lambda);
      this.dataSource.sort = this.sort;
      });
    });
  }

  @ViewChild(MatSort) sort: MatSort;

   public newLambda() {
    this.router.navigate(['lambdaitem']);
  }
}
