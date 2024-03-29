import { Services } from './services';
import { WebHook } from '../webhook';
import { Metadata } from '../k8s/metadata';
import { K8SSecret } from '../k8s/secret';


export class SlackSource {
  metadata: Metadata = new Metadata();
  services: Services = new Services();
  webhook: WebHook = new WebHook();
  token: K8SSecret = new K8SSecret();
  slackSigningSecret: K8SSecret = new K8SSecret();
  tlsSecret: K8SSecret = new K8SSecret();


  constructor() {
    this.metadata.name = "";
    this.metadata.source = "";
    this.metadata.namespace = "";    
  }
}
