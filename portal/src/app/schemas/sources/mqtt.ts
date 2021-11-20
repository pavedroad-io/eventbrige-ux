import { Metadata } from '../k8s/metadata';
import { ConnectionBackoff } from './connection-backoff';
import { ConsummerGroup } from './consumer-group';
import { K8SSecret } from '../k8s/secret';
import { SASL } from './sasl';


export class MQTTSource {
  metadata: Metadata = new Metadata();
  url: string = 'kafka.argo-events:9092';
  topic: string = "atopic";
  jsonBody: boolean = true;
  clientID: string = "";
  backoff: ConnectionBackoff = new ConnectionBackoff();
  tlsCaCertSecret: K8SSecret = new K8SSecret();
  tlsClientCertSecret: K8SSecret = new K8SSecret();
  tlsClientKeySecret: K8SSecret = new K8SSecret();
  
  constructor() {
  }
}
