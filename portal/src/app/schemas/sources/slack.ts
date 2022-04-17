import { Services } from './services';
import { WebHook } from '../webhook';
import { Metadata } from '../k8s/metadata';
import { K8SSecret } from '../k8s/secret';


export class SlackSource {
  metadata: Metadata
  services: Services
  webhook: WebHook
  token: K8SSecret
  slackSigningSecret: K8SSecret
  tlsSecret: K8SSecret


  constructor() {
    this.metadata.name = "";
    this.metadata.source = "";
    this.metadata.namespace = "";    
  }
}
