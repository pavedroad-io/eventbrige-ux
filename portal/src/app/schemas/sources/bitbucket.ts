import { Services } from './services';
import { WebHookList } from '../webhooklist';
import { Metadata } from '../k8s/metadata';
import { K8SSecret } from '../k8s/secret';

export class BitbucketSource {
  metadata: Metadata;
  services: Services;
  webhooks: WebHookList;
  events: Array<string>;
  accessToken: K8SSecret;
  webhookSecret: K8SSecret;
  deleteHookOnFinish: boolean = true;
  bitbucketServerBaseURL: string = ""

  constructor() {
    this.metadata = new Metadata();
    this.services = new Services();
    this.webhooks = new WebHookList();
    this.events = new Array();
    this.accessToken = new K8SSecret();
    this.webhookSecret = new K8SSecret;

  }
}
