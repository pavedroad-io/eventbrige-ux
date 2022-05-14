import { K8SSecret } from './k8s/secret';
import { KeyValuePair } from './k8s/kvpair';

export enum orchestrationFrameworks {
  Kubernetes = 'Kubernetes',
  Docker = 'Docker',
}

export class Environment {
  id: string = '';
  name: string = '';
  framework: string = '';
  provider: K8SSecret = new K8SSecret();
  environmentVariables: KeyValuePair[] = new Array(0);
}
