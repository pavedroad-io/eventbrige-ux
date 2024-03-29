import { K8SSecret } from '../k8s/secret';

export class AzureEventHubItem {
  name: string = "";
  fqdn: string = "";
  hubname: string = "";
  sharedAccessKeyName:  K8SSecret = new K8SSecret();
  sharedAccessKey:  K8SSecret = new K8SSecret();

  constructor() {
  }
}
