import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
        { title: 'Films', cols: 1, rows: 1 },
        { title: 'HTTP Collector', cols: 1, rows: 1 },
        { title: 'Developers', cols: 1, rows: 1 },
        { title: 'films', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Films', cols: 1, rows: 1 },
        { title: 'HTTP Collector', cols: 1, rows: 1 },
        { title: 'Developers', cols: 1, rows: 1 },
        { title: 'films', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
