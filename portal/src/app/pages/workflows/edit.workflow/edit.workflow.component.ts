import {
  AfterViewInit,
  Component,
  OnInit,
  Input,
  ViewChild,
  NgModule,
  OnChanges,
  SimpleChanges,
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

// PR Services
import { CustomerService } from '../../../services/customers.service';
import { ProfileService } from '../../../services/profile.service';

// PR Schemas
import { Customers } from '../../../schemas/customers';
import { Workflows } from '../../../schemas/workflow/workflows';
import {
  GenericWorkflow,
  WorkflowTypes,
} from '../../../schemas/workflow/generic';

// PR Components
//import { KvpairComponent } from '../../../core/components/widgets/kvpair/kvpair.component';
//import { EnvironmentsComponent } from '../../../shared/components/environments/environments.component';

@Component({
  selector: 'app-edit.workflow',
  templateUrl: './edit.workflow.component.html',
  styleUrls: ['./edit.workflow.component.scss'],
})
export class EditWorkflowComponent implements OnInit, OnChanges {
  workflowFG: FormGroup;
  workflows: Workflows = new Workflows();
  genericWorkflow: GenericWorkflow = new GenericWorkflow();
  cardTitle: string = 'Workflow';
  cardSubTitle: string;
  workflowTypes = Object.values(WorkflowTypes);
  @Input() typeSelected: string = '';
  addMode: boolean = true;
  buttonText: string = 'Add';
  submitted: boolean = false;
  id: string;
  customer: Customers = new Customers(); // Really a config object

  constructor(
    private fb: FormBuilder //    public organizationds: OrganizationService,
  ) //    private route: ActivatedRoute,
  //    private router: Router,
  //    private deleteDialog: MatDialog
  {
    this.workflowFG = this.createworkflow();
  }

  createworkflow(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
    });
  }

  get getFormGroup() {
    return this.workflowFG.controls;
  }

  ngOnChanges(changes: SimpleChanges) {}

  typeChanged(type: any) {
    this.typeSelected = type;
    this.cardSubTitle = "John";
    console.log(this.typeSelected);
  }

  onSubmit(f) {}

  ngOnInit(): void {}
}