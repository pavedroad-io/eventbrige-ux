import { Services } from './services';
import { WebHookList } from '../webhooklist';
import { K8SSecret } from '../k8s/secret';
import { Metadata } from '../k8s/metadata';

export class K8SResourceSource {
  metadata: Metadata;
  services: Services;
  webhook: WebHookList;

  constructor() {
    this.metadata = new Metadata();
    this.services = new Services();
    this.webhook = new WebHookList();
  }
}
