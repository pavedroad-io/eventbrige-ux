import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})

export class NavigationBarComponent implements OnInit {
 	private returnUrl = '/';	
	private rightSidenav: boolean = false;
	public APP_TOOLBAR_TITLE = "PavedRoad.io";

	constructor(private router: Router,
	public rightNav: NavigationComponent)
	{
		   this.router.events.subscribe((event) => {

      if (event instanceof NavigationEnd) {
        this.returnUrl = event.url;
      }
    });
	}

	toggleSideNav() {
		this.rightNav.toggle();
	}

  ngOnInit(): void {
  }

	 public onProfile() {
    console.log(this);
		 //    this.router.navigate(['users/profile']);
  }

  public logout() {
    console.log(this);

		//    this.authService.logout(this.returnUrl || '/');
  }
}
