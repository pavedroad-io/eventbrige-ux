import { Metadata } from '../k8s/metadata';
import { K8SSecret } from '../k8s/secret';

export class HDFSSource {
  metadata: Metadata;

  directory: string = '';
  type: string = '';
  path: string = '';
  hdfsUser: string = '';
  addresses: Array<string> = new Array(0);
  krbUsername: string = '';
  krbRealm: string = '';
  krbServicePrincipalName: string = '';
  krbCacheSecret: K8SSecret = new K8SSecret();
  krbKeytabSecret: K8SSecret = new K8SSecret();
  krbConfigMap: K8SSecret = new K8SSecret();



  constructor() {
  }
}
