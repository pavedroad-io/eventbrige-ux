import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {
  MatDialog,
  MatDialogConfig,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';

import { DeleteDialogComponent } from '../../../core/components/delete-dialog/delete-dialog.component';
import { CustomerService } from '../../../services/customers.service';
import { Customers } from '../../../schemas/customers';
import { Lambda } from '../../../schemas/lambda';

const sleep = (milliseconds:number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

@Component({
  selector: 'app-lambda-list',
  templateUrl: './lambda-list.component.html',
  styleUrls: ['./lambda-list.component.scss'],
})
export class LambdaListComponent implements OnInit {
  customer = new Customers();
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatSort) sort!: MatSort;

  public displayedColumns: string[] = [
    'checked',
    'name',
    'provider',
    'functionName',
    'region',
    'actions',
  ];

  constructor(
    private customerds: CustomerService,
    private router: Router,
    private deleteDialog: MatDialog
  ) {}

  openDeleteDialog(event: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.closeOnNavigation = true;
    dialogConfig.data = {
      id: 'Function = ' + event.functionName,
      title: 'Delete -> ' + event.name,
    };

    const confirmDialog = this.deleteDialog.open(
      DeleteDialogComponent,
      dialogConfig
    );

    confirmDialog.afterClosed().subscribe((result) => {
      if (result === true) {
        this.customer.configuration.triggers.lambda.forEach((item, index) => {
          if (item.name == event.name)
            this.customer.configuration.triggers.lambda.splice(index, 1);
        });
        this.customerds.UpdateCustomer(this.customer);
      }
    });
  }

  ngOnInit(): void {
    sleep(250).then(() => {
      this.customerds.share.subscribe((data: any) => {
        this.customer = data;
        this.dataSource = new MatTableDataSource(
          this.customer.configuration.triggers.lambda
        );
        this.dataSource.sort = this.sort;
      });
    });
  }


  public newLambda() {
    this.router.navigate(['lambdaitem']);
  }

  public deleteFunction(event: any) {
    // Add alert box
    this.customer.configuration.triggers.lambda.forEach((item, index) => {
      if (item.name == event.name)
        this.customer.configuration.triggers.lambda.splice(index, 1);
    });
    this.customerds.UpdateCustomer(this.customer);
  }
}
