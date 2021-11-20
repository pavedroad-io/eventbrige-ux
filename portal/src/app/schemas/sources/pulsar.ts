import { Metadata } from '../k8s/metadata';
import { PulsarItem } from './pulsar-item';


export class PulsarSource {
  metadata: Metadata;
  pulsar: Array<PulsarItem>;

  constructor() {
    this.metadata = new Metadata();
    this.pulsar = new Array();
  }
}
