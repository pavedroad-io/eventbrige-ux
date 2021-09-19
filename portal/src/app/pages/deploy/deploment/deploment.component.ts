import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeploymentService } from '../../../services/deployment.service';

import { Customers } from '../../../schemas/customers';
import { CustomerService } from '../../../services/customers.service';

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

@Component({
  selector: 'app-deploment',
  templateUrl: './deploment.component.html',
  styleUrls: ['./deploment.component.scss'],
})
export class DeplomentComponent implements OnInit {
  activeSpinner: boolean = true;
  manifestProgress: number;
  deploymentProgress: number;
  schedulerProgress: number;
  manifestMode: 'indeterminate';
  deploymentMode: 'indeterminate';
  schedulerMode: 'determinate';

  status: string;
  eventbridgeConfig: Customers = new Customers();
  customerInit: boolean = false;

  constructor(
    private deploymentSvc: DeploymentService,
    public customerds: CustomerService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.generateManifests();
    this.manifestProgress = 0;
    this.deploymentProgress = 0;
    this.schedulerProgress = 0;
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
      verticalPosition: 'top'
    });
  }

  loadStatus() {
    this.deploymentSvc.getDeployment().subscribe((data: string) => {
      this.status = data;
      console.log('Load StatusData: ', data);
      if (data.includes('Profile not loaded')) {
        console.log('DATA', data);
        sleep(1000).then(() => {
          this.loadStatus();
        });
      } else {
        this.generateManifests();
      }
    });
  }

  generateManifests() {
    if (this.eventbridgeConfig.customersuuid != '') {
      this.deploymentSvc
        .createDeployment(this.eventbridgeConfig)
        .subscribe((data: any) => {
          this.status = data;
          console.log('Data: ', data);
          this.activeSpinner = false;
          this.deployManifests();
          this.openSnackBar('Deployment completed', 'close');
        });
    } else {
      sleep(1000).then(() => {
        console.log(this.eventbridgeConfig.customersuuid);
        this.generateManifests();
      });
    }
  }

  deployManifests() {
    this.deploymentProgress = 100;
    this.updateScheuler();
  }

  updateScheuler() {
    this.schedulerProgress = 25;
  }
}
