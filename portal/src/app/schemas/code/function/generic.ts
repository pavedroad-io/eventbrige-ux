import { Environment } from '../../environment';

export class GenericFunction {
  id: string = ''; // UUID
  name: string = ''; // User friendly name
  type: string = ''; // A WorkflowType

  code: string = ''; // The actual workflow logic

  created: Date = new Date();
  updated: Date = new Date();

  // List of environments for deploying a workflow
  environments: Environment[] = Array(0);

  // Deployment history
  history: string[] = Array(0);
}
