import { Metadata } from '../k8s/metadata';
import { ConnectionBackoff } from './connection-backoff';
import { K8SSecret } from '../k8s/secret';


export class NSQSource {
  metadata: Metadata = new Metadata();
  hostAddress: string = "";
  jsonBody: boolean = true;
  topic: string = "atopic";
  channel: string = "";
  backoff: ConnectionBackoff = new ConnectionBackoff();
  tlsCaCertSecret: K8SSecret = new K8SSecret();
  tlsClientCertSecret: K8SSecret = new K8SSecret();
  tlsClientKeySecret: K8SSecret = new K8SSecret();

  constructor() {
  }
}
