import { Metadata } from '../k8s/metadata';
import { KeyValuePair } from '../k8s/kvpair';
import { K8SSecret } from '../k8s/secret';

export class MinioSource {
  bucket: string = '';
  endpoint: string = '';
  events: Array<string> = new Array(0);
  insecure: boolean = true;
  accessKey:  K8SSecret = new K8SSecret();
  secretKey:  K8SSecret = new K8SSecret();
  filter: Array<KeyValuePair> = new Array(0);

  constructor() {}
}
