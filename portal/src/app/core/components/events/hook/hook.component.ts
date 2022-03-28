// Angular
import {
  Component,
  OnInit,
  ViewChild,
  Output,
  AfterViewInit,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';

import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';

import {
  NgForm,
  FormBuilder,
  FormGroup,
  FormControl,
  FormsModule,
  Validators,
} from '@angular/forms';

// Material
import {
  MatDialog,
  MatDialogConfig,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

// PR
import { Hook } from '../../../../schemas/hook';
import { DeleteDialogComponent } from '../../../components/delete-dialog/delete-dialog.component';
import { ProfileService } from '../../../../services/profile.service';
import { PorttrackerService } from '../../../../services/porttracker.service';

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

@Component({
  selector: 'app-hook',
  templateUrl: './hook.component.html',
  styleUrls: ['./hook.component.scss'],
})
export class HookComponent implements OnInit, AfterViewInit {
  @Output() parentEvent = new EventEmitter();
  hook: Hook = new Hook();
  submitted: Boolean = false;
  hookForm = this.fb.group({
    name: ['', Validators.required],
    endpoint: [{ value: '/', disabled: true }, Validators.required],
    port: [
      { value: this.portds.nextPort(), disabled: true },
      Validators.required,
    ],
    methods: [this.hook.methods, Validators.required],
  });
  fullProfile;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public profileds: ProfileService,
    public portds: PorttrackerService,
    private deleteDialog: MatDialog
  ) {}

  get fg() {
    return this.hookForm.controls;
  }

  ngOnInit(): void {
    this.onValueChanges();

    this.profileds.share.subscribe(data => this.fullProfile = data);
    //sleep(1000).then(() => {
    //  this.profileds.share.subscribe((data: any) => {
    //    this.fullProfile = data;
    //  });
    //});
  }

  ngAfterViewInit() {}

  ngOnChanges(changes: SimpleChanges) {
  }

  onSubmit(formRef) {
  //  console.log(this.hookForm.getRawValue());
    this.hookForm.get('port').setValue(this.portds.nextPort());
  }

  onValueChanges(): void {
    this.hookForm.get('name').valueChanges.subscribe((val) => {
      let prefix = '';
      if (
        this.fullProfile != '' &&
        this.fullProfile.app_metadata != undefined &&
        this.fullProfile.app_metadata.customer_id != ''
      ) {
        prefix = this.fullProfile.app_metadata.customer_id.split('-');
      }

      this.hookForm.get('endpoint').setValue('/' + val + '-' + prefix[0]);
    });

    this.hookForm.valueChanges.subscribe((change) => {
      this.parentEvent.emit(this.hookForm.valid);
    });
  }
}
