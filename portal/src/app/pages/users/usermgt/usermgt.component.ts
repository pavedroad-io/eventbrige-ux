import { AfterViewInit, Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators, FormArray, FormGroupDirective } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { from, Observable } from 'rxjs';

import { Organization } from '../../../schemas/organization';
import { User } from '../../../schemas/users';


@Component({
  selector: 'app-usermgt',
  templateUrl: './usermgt.component.html',
  styleUrls: ['./usermgt.component.css']
})
export class UsermgtComponent implements OnInit {
  userFG: any;
  user = new User();
  dataSource: any;
  info: Organization = new Organization();
  titleAlert: string = 'This field is required';
  post: any = '';

  public displayedColumns: string[] = [
    'name',
    'email',
    'phone',
    'profile',
    'role'];

  constructor(private fb: FormBuilder) {
     this.userFG = this.fb.group({
       email: [' ', Validators.required],
       name: [' ', Validators.required],
       phone: [' ', Validators.required],
       profile: [' ', Validators.required],
       role: [' ', Validators.required]
     });

                              
     this.dataSource = new MatTableDataSource(this.info.members);
     this.dataSource.sort = this.sort;
  }

  createUser(): FormGroup {
    return this.fb.group({
      name: [' '],
      email: [' '],
      phone: [' '],
      profile: [' '],
      role: [' ']
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
    this.info.members.push(this.userFG.value)

    // Update our data source for the table
    this.dataSource = new MatTableDataSource(this.info.members);


    // reset the form group
    var nc = this.createUser().value;
    // This is such a hack, need to remove ng-invalid calls and
    // mark as unsubmitted.
    this.userFG.reset(nc);
  }

  ngOnInit(): void {
  }
  
  @ViewChild(MatSort) sort: MatSort;


  /*
  get name() {
    return this.formGroup.get('name') as FormControl
  }
 */

}
