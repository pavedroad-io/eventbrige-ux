import { Services } from './services';
import { WebHook } from '../webhook';
import { WebHookList } from '../webhooklist';
import { Metadata } from '../k8s/metadata';
import { K8SSecret } from '../k8s/secret';


export class WebhookSource {
  metadata: Metadata
  services: Services
  webhook: WebHookList;

  constructor() {
  }
}
