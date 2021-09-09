import { Component, OnInit, Injectable, Inject } from '@angular/core';
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
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface IDeleteDialogData {
  title: string;
  id: string;
}

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css'],
})
export class DeleteDialogComponent implements OnInit {
  form: FormGroup;
  description: string;
  confirmed: boolean;

  constructor(
    private dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDeleteDialogData
  ) {
    this.description = 'delete dialog';
  }

  ngOnInit() {
    this.confirmed = false;
  }

  delete() {
    this.confirmed = true;
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }
}
