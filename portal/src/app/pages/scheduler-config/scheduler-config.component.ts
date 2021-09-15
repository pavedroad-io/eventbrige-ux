import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';

import { CustomerService } from '../../services/customers.service';

@Component({
  selector: 'app-scheduler-config',
  templateUrl: './scheduler-config.component.html',
  styleUrls: ['./scheduler-config.component.scss'],
})
export class SchedulerConfigComponent implements OnInit {
  submitted = false;
  pollInterval: number = 600;
  numberOfWorkers: number;

  onSubmit(form: NgForm) {
    this.router.navigate(['home']);
  }

  constructor(
    public customerds: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.numberOfWorkers = 10;
    this.pollInterval = 600;
  }
}
