import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';

import { CustomerService } from '../../services/customers.service';

@Component({
  selector: 'app-scheduler-config',
  templateUrl: './scheduler-config.component.html',
  styleUrls: ['./scheduler-config.component.scss'],
})
export class SchedulerConfigComponent implements OnInit {
  submitted:boolean = false;
  pollInterval: number = 600;
  numberOfWorkers: number = 10;

  onSubmit(form: NgForm) {
    this.router.navigate(['home']);
  }

  constructor(
    public customerds: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }
}
