
import { K8SSecret } from '../k8s/secret';

export class AzureEventHubItem {
  name: string = "";
  fqdn: string = "";
  hubname: string = "";
  sharedAccessKeyName:  K8SSecret;
  sharedAccessKey:  K8SSecret;

  constructor() {
    this.sharedAccessKeyName = new K8SSecret();
    this.sharedAccessKey = new K8SSecret();
  }
}
