import { Services } from './services';
import { WebHookList } from '../webhooklist';
import { Metadata } from '../k8s/metadata';
import { K8SSecret } from '../k8s/secret';
import { KeyValuePair } from '../k8s/kvpair';

export class StripeSource {
  metadata: Metadata = new Metadata();;
  services: Services = new Services();;
  webhook: WebHookList = new WebHookList();;
  createWebhook: boolean = true;
  apiKey: K8SSecret = new K8SSecret();;
  namespace: string = '';
  eventFilter: Array<KeyValuePair> = new Array(0);

  constructor() {
  }
}
