import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DeploymentService } from '../../../services/deployment.service';

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

@Component({
  selector: 'app-deploment',
  templateUrl: './deploment.component.html',
  styleUrls: ['./deploment.component.scss'],
})
export class DeplomentComponent implements OnInit {
  manifestProgress: number;
  deploymentProgress: number;
  schedulerProgress: number;
  status: string;

  constructor(private deploymentSvc: DeploymentService) {}

  ngOnInit(): void {
    this.generateManifests();
  }

  ngAfterViewInit(): void {
    this.loadStatus();
  }

  loadStatus() {
    this.deploymentSvc.getDeployment().subscribe((data: string) => {
      this.status = data;
      console.log("Data: ", data);
      if ( data.includes('Profile not loaded') ) {
        console.log('DATA', data);
        sleep(1000).then(() => {
		this.loadStatus();
	});
      }
    });
  }

  generateManifests() {
    this.manifestProgress = 25;
    this.deployManifests();
  }

  deployManifests() {
    this.deploymentProgress = 25;
    this.updateScheuler();
  }

  updateScheuler() {
    this.schedulerProgress = 25;
  }
}
