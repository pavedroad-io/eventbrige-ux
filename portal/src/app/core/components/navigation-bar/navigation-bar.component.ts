import { Component, EventEmitter, Output, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';
import { ProfileComponent } from '../profile/profile.component';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})

export class NavigationBarComponent implements OnInit {
 	private returnUrl = '/';	
	private rightSidenav: boolean = true;
	public APP_TOOLBAR_TITLE = "PavedRoad.io";
  @ViewChild(ProfileComponent) pf: ProfileComponent;

	constructor(private router: Router,
	            public rightNav: NavigationComponent,
              public auth: AuthService)
	{
		  this.router.events.subscribe((event) => {

      if (event instanceof NavigationEnd) {
        this.returnUrl = event.url;
      }
    });
	}

  gotoOrg() {
    let fullProfile = this.pf.getProfile();
    if (fullProfile.customer_id != undefined || fullProfile.customer_id === "") {
       let r = 'organization/'+fullProfile.customer_id;
       this.router.navigate([r]);
    } 
    else
       this.router.navigate(['organization']);
  }

  gotoUsers() {
    let fullProfile = this.pf.getProfile();
    if (fullProfile.customer_id != undefined || fullProfile.customer_id === "") {
       let r = 'usermgt/'+fullProfile.customer_id;
       this.router.navigate([r]);
    } 
  }

	toggleSideNav() {
		this.rightNav.toggle();
	}

  ngOnInit(): void {
  }

	 public onProfile() {
    console.log(this);
  }

  public logout() {
    this.auth.logout({ returnTo: document.location.origin })
  }
}
