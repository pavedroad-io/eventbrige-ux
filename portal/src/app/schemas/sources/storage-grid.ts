import { Services } from './services';
import { WebHookList } from '../webhooklist';
import { Metadata } from '../k8s/metadata';
import { K8SSecret } from '../k8s/secret';

export class StorageGridSource {
  metadata: Metadata;
  services: Services;
  webhook: WebHookList;
  events: Array<string>;
  topicARN: string;
  bucket: string;
  apiURL: string;
  authToken: K8SSecret;

  constructor() {
    this.metadata = new Metadata();
    this.services = new Services();
    this.webhook = new WebHookList();
    this.events = new Array(0);
    this.topicARN = "";
    this.bucket = "";
    this.apiURL = "";
    this.authToken = new K8SSecret();
  }
}
