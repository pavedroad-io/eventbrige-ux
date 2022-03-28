import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  NgModule,
} from '@angular/core';

import {
  NgForm,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  FormGroupDirective,
} from '@angular/forms';

import {
  MatDialog,
  MatDialogConfig,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';

import { from, Observable } from 'rxjs';

import { Metadata } from '../../../schemas/k8s/metadata';
import { DeleteDialogComponent } from '../../../core/components/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.scss'],
})
export class MetadataComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private deleteDialog: MatDialog
  ) {}

  ngOnInit(): void {}
}
