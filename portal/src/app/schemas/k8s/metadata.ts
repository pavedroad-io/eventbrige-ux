import { KeyValuePair } from './kvpair';

export class Metadata {
  name: string; // For argo this is the event name

  // For Argo this is the eventSourceName
  source: string;
  namespace: string;
  labels: Array<KeyValuePair>;
  annotations: Array<KeyValuePair>;

  constructor() {
    this.labels = new Array(0);
    this.annotations = new Array(0);
    this.name = '';
    this.namespace = 'pavedroad';
    this.source = '';
  }
}
