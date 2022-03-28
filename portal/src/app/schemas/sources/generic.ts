import { Metadata } from '../k8s/metadata';
import { KeyValuePair } from '../k8s/kvpair';


export class GenericSource{
  insecure: boolean = true;
  url: string = "";
  config: Array<KeyValuePair> =  new Array(0);

  constructor() {
  }
}
