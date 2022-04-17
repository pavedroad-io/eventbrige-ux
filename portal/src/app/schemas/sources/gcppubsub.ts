import { Metadata } from '../k8s/metadata';
import { K8SSecret } from '../k8s/secret';


export class GCPPubSubSource {
  metadata: Metadata = new Metadata();
  jsonBody: boolean = true;
  projectID: string =  "";
  topicProjectID:  string = "";
  topic:  string = "";
  subscriptionID:  string = ""
  credentialSecret: K8SSecret = new K8SSecret();

  constructor() {
  }
}
