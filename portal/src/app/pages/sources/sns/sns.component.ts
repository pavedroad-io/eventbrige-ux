// Angular
import {
  Component,
  OnInit,
  ViewChild,
  Output,
  AfterViewInit,
  EventEmitter,
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

import { LayoutModule } from '@angular/cdk/layout';

import {
  NavigationEnd,
  Router,
  ActivatedRoute,
  Routes,
  RouterModule,
} from '@angular/router';

// Angular

// PR Components
import { SecretComponent } from '../../../core/components/k8s/secret/secret.component';
import { HookComponent } from '../../../core/components/events/hook/hook.component';
import { SNSSource } from '../../../schemas/sources/sns';

// PR Services
import { CustomerService } from '../../../services/customers.service';
import { ProfileService } from '../../../services/profile.service';

// PR Schemas
import { Customers } from '../../../schemas/customers';
import { Sources } from '../../../schemas/sources';

@Component({
  selector: 'app-sns',
  templateUrl: './sns.component.html',
  styleUrls: ['./sns.component.scss'],
})
export class SnsComponent implements OnInit, AfterViewInit {
  @ViewChild(HookComponent) hook!: HookComponent;
  @ViewChild(SecretComponent) secret!: SecretComponent;

  source: SNSSource = new SNSSource({});
  labels: string;
  customer: Customers = new Customers(); // Really a config object
  providerSelected: string = '';
  addMode: boolean = true;
  buttonText: string = 'Add';
  submitted: boolean = false;
  id: string;

  snsForm = this.fb.group({
    region: ['', Validators.required],
    roleARN: ['', Validators.required],
    topicARN: ['', Validators.required],
    validateSignature: [true],
  });

  constructor(
    private fb: FormBuilder,
    public customerds: CustomerService,
    public profileds: ProfileService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.customerds.share.subscribe((data) => {
      this.customer = data;
      if (this.id) {
        this.buttonText = 'Update';
        this.addMode = false;
        if (this.customer.configuration.sources.sns.length == 0) {
          return;
        }
        const result = this.source.find(
          this.id,
          this.customer.configuration.sources.sns
        );
        if (result != undefined) {
          this.source = result;
          this.display();
        }
      }
    });
  }

  ngAfterViewInit() {}

  childMessage($event) {
    console.log('message: ', $event);
  }

  allValid() {
    if (this.hook != undefined) {
      return (
        !this.snsForm.valid ||
        !this.hook.hookForm.valid ||
        this.secret.providerSelected == ''
      );
    } else return !this.snsForm.valid;
  }

  get getFormGroup() {
    return this.snsForm.controls;
  }

  onSubmit(formReference) {
    var formData = this.snsForm.getRawValue();
    var providerData = this.secret.lookup(this.secret.providerSelected);

    // Add if missing in customer data
    if (
      this.customer.configuration.sources == undefined ||
      this.customer.configuration.sources.sns == undefined
    ) {
      var newSrc: Sources = new Sources();
      this.customer.configuration.sources = newSrc;
    }

    this.source.awssecret.key = providerData.name;
    this.source.awssecret.value = providerData.credentials;
    this.source.region = formData.region;
    this.source.roleARN = formData.roleARN;
    this.source.topicARN = formData.topicARN;
    this.source.validateSignature = formData.validateSignature;
    this.source.snshook = this.hook.hookForm.getRawValue();
    this.source.snsmetadata.name = this.source.snshook.name;

    if (this.addMode) {
      this.customer.configuration.sources.sns.push(this.source);
    }
    this.customerds.UpdateCustomer(this.customer);

    this.resetForm();
    this.router.navigate(['sources']);
  }

  resetForm() {
    this.hook.hookForm.reset();
    this.snsForm.reset();
    this.snsForm.controls['validateSignature'].setValue(true);
    this.secret.providerSelected = '';
  }

  display() {
    this.resetForm();
    this.secret.providerSelected = this.source.awssecret.key;
    this.snsForm.controls['region'].setValue(this.source.region);
    this.snsForm.controls['roleARN'].setValue(this.source.roleARN);
    this.snsForm.controls['topicARN'].setValue(this.source.topicARN);
    this.snsForm.controls['validateSignature'].setValue(
      this.source.validateSignature
    );
    this.hook.hookForm.controls['name'].setValue(this.source.snshook.name);
    this.hook.hookForm.controls['port'].setValue(this.source.snshook.port);
    this.hook.hookForm.controls['methods'].setValue(
      this.source.snshook.methods
    );
  }
}
