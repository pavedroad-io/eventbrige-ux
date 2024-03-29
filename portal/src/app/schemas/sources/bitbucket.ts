import { Services } from './services';
import { WebHookList } from '../webhooklist';
import { Metadata } from '../k8s/metadata';
import { K8SSecret } from '../k8s/secret';

export class BitbucketSource {
  metadata: Metadata = new Metadata();
  services: Services = new Services();
  webhooks: WebHookList = new WebHookList();
  events: Array<string> = new Array(0);
  accessToken: K8SSecret = new K8SSecret();
  webhookSecret: K8SSecret = new K8SSecret();
  deleteHookOnFinish: boolean = true;
  bitbucketServerBaseURL: string = ""

  constructor() {
  }
}
