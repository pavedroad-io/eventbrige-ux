import { K8SSecret } from '../k8s/secret';

export class SASL {
  mechanism: string = 'plain';
  passwordSecret: K8SSecret;
  userSecret: K8SSecret;

  constructor() {}
}
