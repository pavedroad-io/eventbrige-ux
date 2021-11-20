import { Metadata } from '../k8s/metadata';
import { Services } from './services';
import { WebHookList } from '../webhooklist';
import { GithubRepostory } from './github-repo';
import { K8SSecret } from '../k8s/secret';


export class GithubSource {
  name: string = "";
  metadata: Metadata;
  services: Services;
  repository: GithubRepostory = new GithubRepostory();
  webhooks: WebHookList;
  events: Array<string> = new Array(0);
  apiToken: K8SSecret = new K8SSecret();
  webhookSecret: K8SSecret = new  K8SSecret();
  insecure: boolean = false;
  active: boolean = true;
  contentType: string = "json"
  

  constructor() {
    
  }
}
