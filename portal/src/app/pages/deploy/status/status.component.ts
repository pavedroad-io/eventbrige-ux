import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Customers } from '../../../schemas/customers';
import { CustomerService } from '../../../services/customers.service';
import { DeploymentService } from '../../../services/deployment.service';

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class DeploymentStatusComponent implements OnInit {
  activeSpinner: boolean = true;
  panelOpenState = true;

  status: string;
  eventbridgeConfig: Customers = new Customers();
  customerInit: boolean = false;
  activeConfig: string = '';
  cardstatus: string = 'Getting status';

  constructor(
    private deploymentSvc: DeploymentService,
    public customerds: CustomerService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    sleep(1000).then(() => {
      this.customerds.share.subscribe((data: any) => {
        this.eventbridgeConfig = data;
        this.customerInit = true;
      });
    });
  }

  ngAfterViewInit(): void {
    this.loadStatus();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      panelClass: ['pr-rust-snackbar'],
      verticalPosition: 'top',
    });
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
        this.cardstatus = 'Current status';
        this.activeSpinner = false;
        this.panelOpenState = true;
      }
    });
  }
}
