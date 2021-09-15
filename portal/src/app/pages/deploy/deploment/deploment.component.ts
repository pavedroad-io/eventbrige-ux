import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deploment',
  templateUrl: './deploment.component.html',
  styleUrls: ['./deploment.component.scss'],
})
export class DeplomentComponent implements OnInit {
  manifestProgress: number;
  deploymentProgress: number;
  schedulerProgress: number;

  constructor() {}

  ngOnInit(): void {
    this.generateManifests();
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
