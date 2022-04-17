import { Metadata } from '../k8s/metadata';
import { K8SSecret } from '../k8s/secret';


export class RedisSource {
  metadata: Metadata;
  hoststring: string;
  password: K8SSecret;
  db: string;
  channels: Array<string>;
  tls: Array <K8SSecret>;

  constructor() {
    this.metadata = new Metadata();
    this.hoststring = "";
    this.password = new K8SSecret();
    this.db = "";
    this.channels = new Array(0);
    this.tls = new Array(0);
  }
}
