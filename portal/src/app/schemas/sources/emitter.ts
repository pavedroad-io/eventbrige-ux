import { Metadata } from '../k8s/metadata';
import { K8SSecret } from '../k8s/secret';
import { ConnectionBackoff } from './connection-backoff';


export class EmitterSource {
  metadata: Metadata = new Metadata();
  broker: string = "";
  channelName: string = "";
  channelKey: string = "";
  jsonBody: boolean = true;
  connectionBackoff: ConnectionBackoff = new ConnectionBackoff();
  username: K8SSecret = new K8SSecret();
  password: K8SSecret = new K8SSecret();
  caCertSecret: K8SSecret = new K8SSecret();
  clientCertSecret: K8SSecret = new K8SSecret();
  clientKeySecret: K8SSecret = new K8SSecret();

  constructor() {
  }
}
