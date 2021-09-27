import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DeleteDialogComponent } from '../../../core/components/delete-dialog/delete-dialog.component';
import { Customers } from '../../../schemas/customers';
import { CustomerService } from '../../../services/customers.service';
import { DeploymentService } from '../../../services/deployment.service';

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteDeploymentComponent implements OnInit {
  activeSpinner: boolean = false;
  panelOpenState = true;
  activeConfig;
  string = '';

  status: string;
  cardstatus: string = 'delete pending confirmation';
  results: string = '';

  constructor(
    private deploymentSvc: DeploymentService,
    public customerds: CustomerService,
    private _snackBar: MatSnackBar,
    private deleteDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadStatus();
  }

  loadStatus() {
    this.deploymentSvc.getDeployment().subscribe((data: string) => {
      if (data.includes('Profile not loaded')) {
        this.status = data;
        sleep(1000).then(() => {
          this.loadStatus();
        });
      } else {
        this.activeConfig = data;
      }
    });
  }

  deleteConfig() {
    this.deploymentSvc.deleteDeployment().subscribe((data: string) => {
      this.status = data;
      if (data.includes('Profile not loaded')) {
        sleep(1000).then(() => {
          this.deleteConfig();
        });
      } else {
        this.cardstatus = 'deployment deleted';
        this.activeSpinner = false;
        this.results = data;
        this.openSnackBar(this.results, 'close');
        console.log(this.results);
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      panelClass: ['pr-rust-snackbar'],
      verticalPosition: 'top',
    });
  }

  openDeleteDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.closeOnNavigation = true;
    dialogConfig.data = {
      id: 'Confire you want to delete your current deployment',
      title: 'Delete',
    };

    const confirmDialog = this.deleteDialog.open(
      DeleteDialogComponent,
      dialogConfig
    );

    confirmDialog.afterClosed().subscribe((result) => {
      if (result === true) {
        console.log('delete confirmed');
        this.activeSpinner = true;
        this.cardstatus = 'Delete in progress';
        this.deleteConfig();
      }
    });
  }
}
