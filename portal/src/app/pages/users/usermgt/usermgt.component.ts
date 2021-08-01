import { AfterViewInit, Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators, FormArray, FormGroupDirective } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';

import { from, Observable } from 'rxjs';

import { Organization } from '../../../schemas/organization';
import { OrganizationService } from  '../../../services/organization.service';
import { User } from '../../../schemas/users';


@Component({
  selector: 'app-usermgt',
  templateUrl: './usermgt.component.html',
  styleUrls: ['./usermgt.component.css']
})
export class UsermgtComponent implements OnInit {
  userFG: FormGroup;
  user = new User();
  dataSource: any;
  org: Organization = new Organization();
  id: string;
  submitted = false;
  editMode = false;
  modeLabel = "Add a new user"

  public displayedColumns: string[] = [
    'name',
    'email',
    'phone',
    'profile',
    'role'];

  constructor(private fb: FormBuilder,
             public organizationds:OrganizationService,
             private route: ActivatedRoute,
             private router: Router) {

     this.userFG = this.createUser();
     this.dataSource = new MatTableDataSource(this.org.members);
     this.dataSource.sort = this.sort;
  }
  
  get f() { return this.userFG.controls; }

  createUser(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: [''],
      profile: [''],
      role: ['', Validators.required]
    })
  }

  newUser(c: User): FormGroup {
    return this.fb.group({
      name: [c.name],
      email: [c.email],
      phone: [c.phone],
      profile: [c.profile],
      role: [c.role]
    })
  }

  addUser(f: FormGroupDirective): void {
    this.submitted = true;

    if (this.userFG.valid) {
      this.org.members.push(this.userFG.value)

      // Update our data source for the table
      this.dataSource = new MatTableDataSource(this.org.members);

      // reset the form group
      this.userFG.reset(this.createUser().value);
      this.submitted=false;
      this.updateOrg();
    }
  }

  public editUser(event) {
  }

  public deleteUser(event) {
    // Add alert box
    this.org.members.forEach((item, index)=>{
      if (item.name ==event.name)
        this.org.members.splice(index,1);
    });
    this.updateOrg();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.organizationds.share.subscribe((data: any) => {
      this.org = data;
      this.dataSource = new MatTableDataSource(this.org.members);
      console.log("ngInit: ", this.org);
    });
    this.organizationds.loadOrg(this.id);
  }
  
  @ViewChild(MatSort) sort: MatSort;

  updateOrg(){
    this.organizationds.UpdateOrganization(this.org);
  }

  onSubmit() {
        this.submitted = true;

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userFG.value, null, 4));
    }

}
