import { Services } from './services';
import { WebHookList } from '../webhooklist';
import { Metadata } from '../k8s/metadata';
import { K8SSecret } from '../k8s/secret';
import { KeyValuePair } from '../k8s/kvpair';

export class StripeSource {
  metadata: Metadata;
  services: Services;
  webhook: WebHookList;
  createWebhook: boolean;
  apiKey: K8SSecret;
  namespace: string;
  eventFilter: Array<KeyValuePair>;

  constructor() {
    this.createWebhook = true;
    this.metadata = new Metadata();
    this.apiKey = new K8SSecret();
    this.services = new Services();
    this.webhook = new WebHookList();
    this.apiKey = new K8SSecret();
    this.eventFilter = new Array();
  }
}
