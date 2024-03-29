import { Services } from './services';
import { WebHook } from '../webhook';
import { WebHookList } from '../webhooklist';
import { Metadata } from '../k8s/metadata';
import { K8SSecret } from '../k8s/secret';


export class WebhookSource {
  metadata: Metadata = new Metadata();
  services: Services = new Services();
  webhook: WebHookList = new WebHookList();

  constructor() {
  }
}
