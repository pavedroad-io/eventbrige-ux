import { Metadata } from '../k8s/metadata';
import { ConnectionBackoff } from './connection-backoff';
import { ConsummerGroup } from './consumer-group';
import { K8SSecret } from '../k8s/secret';
import { SASL } from './sasl';


export class KafkaSource {
  metadata: Metadata = new Metadata();
  url: string = 'kafka.argo-events:9092';
  topic: string = "atopic";
  jsonBody: boolean = true;
  partition: string = "1";
  backoff: ConnectionBackoff = new ConnectionBackoff();
  consummerGroup: ConsummerGroup = new ConsummerGroup();
  limitEventsPerSecond: number = 1
  version: string =   "2.5.0";
  tlsCaCertSecret: K8SSecret = new K8SSecret();
  tlsClientCertSecret: K8SSecret = new K8SSecret();
  tlsClientKeySecret: K8SSecret = new K8SSecret();
  sasl: SASL = new SASL();

  constructor() {
  }
}
