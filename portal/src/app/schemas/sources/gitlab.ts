import { Metadata } from '../k8s/metadata';
import { Services } from './services';
import { WebHookList } from '../webhooklist';
import { K8SSecret } from '../k8s/secret';


export class GitlabSource {
  metadata: Metadata = new Metadata();
  services: Services = new Services();
  project: string = "";
  projects: Array<string> = new Array(0);
  webhooks: WebHookList = new WebHookList();
  events: Array<string> = new Array(0);
  accessToken: K8SSecret = new K8SSecret();
  secretToken: K8SSecret = new  K8SSecret();
  enableSSLVerifiation: boolean = true;
  gitlabBaseURL: string = 'https://gitlab.com';
  deleteHookOnFinish: boolean = true;
  

  constructor() {
    
  }
}
