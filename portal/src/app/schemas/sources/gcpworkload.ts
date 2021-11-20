import { Metadata } from '../k8s/metadata';
import { K8SSecret } from '../k8s/secret';
import { KeyValuePair } from '../k8s/kvpair;


export class GCPWorkflowSource {
  metadata: Metadata = new Metadata();
  jsonBody: boolean = true;
  projectID: string = "";
  topic: string = "";
  subscriptionID: = ";
  env: Array<KeyValuePair> = new Array(0);

  constructor() {
  }
}
