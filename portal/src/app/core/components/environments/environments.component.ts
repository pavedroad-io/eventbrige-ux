import { Component, OnInit } from '@angular/core';
import {
  NgForm,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  FormGroupDirective,
} from '@angular/forms';

import { KvpairComponent } from '../../../core/components/widgets/kvpair/kvpair.component';


@Component({
  selector: 'app-environments',
  templateUrl: './environments.component.html',
  styleUrls: ['./environments.component.scss']
})
export class EnvironmentsComponent implements OnInit {

  constructor(
	  private formBuild: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
