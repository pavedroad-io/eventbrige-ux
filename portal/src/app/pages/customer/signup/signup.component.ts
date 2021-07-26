import { AfterViewInit, Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators, FormArray, FormGroupDirective } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { from, Observable } from 'rxjs';

import { Company } from '../../../schemas/company';
import { Contact } from '../../../schemas/contact';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  companyFG: any;
  contactFG: any;
  contacts: FormArray;
  contact: Contact = new Contact();
  dataSource: any;
  info: Company = new Company();
  titleAlert: string = 'This field is required';
  post: any = '';

  public displayedColumns: string[] = [
    'email',
    'name',
    'phone',
    'profile',
    'role'];



  constructor(private fb: FormBuilder) {
     this.companyFG = this.fb.group({
       id: [' ', Validators.required],
       name: [' ', Validators.required],
       address: [' ', Validators.required],
       city: [' ', Validators.required],
       state: [' ', Validators.required],
       zip: [' ', Validators.required],
       contacts: this.fb.array([ ])
     });

     this.contactFG = this.fb.group({
       email: [' ', Validators.required],
       name: [' ', Validators.required],
       phone: [' ', Validators.required],
       profile: [' ', Validators.required],
       role: [' ', Validators.required]
     });


     this.info.contacts.push(new Contact());
                              
     //this.dataSource = new MatTableDataSource(this.contacts.value);
     this.dataSource = new MatTableDataSource(this.info.contacts);
     this.dataSource.sort = this.sort;
  }

  createContact(): FormGroup {
    return this.fb.group({
      name: [' '],
      email: [' '],
      phone: [' '],
      profile: [' '],
      role: [' ']
    })
  }

  newContact(c: Contact): FormGroup {
    return this.fb.group({
      name: [c.name],
      email: [c.email],
      phone: [c.phone],
      profile: [c.profile],
      role: [c.role]
    })
  }

  addContact(f: FormGroupDirective): void {
    // get the values from the form group
    var values = this.contactFG.value;

    // Create new form array element with values from the form
    var tmp = this.newContact(values);

    // Get the form arrays contacts
    this.contacts = this.companyFG.get('contacts') as FormArray;

    // Append to the form array
    this.contacts.push(tmp);

    console.log("tmp contact: ", tmp);

    // Update our internal company contacts glass
    this.info.contacts = this.contacts.value;

    // Update our data source for the table
    this.dataSource = new MatTableDataSource(this.info.contacts);


    // reset the form group
    var nc = this.createContact().value;
    // This is such a hack, need to remove ng-invalid calls and
    // mark as unsubmitted.
    this.contactFG.reset(nc);
  }

  ngOnInit(): void {
  }
  
  @ViewChild(MatSort) sort: MatSort;


  /*
  get name() {
    return this.formGroup.get('name') as FormControl
  }
 */

  onSubmit(form: NgForm){
    this.info = this.companyFG.value;
    console.log("Submitted", this.info);
  }

}
