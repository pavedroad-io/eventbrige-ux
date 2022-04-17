import { Metadata } from '../k8s/metadata';
import { FileOpt } from './fileopts';

export class ResourceSource {
  metadata: Metadata;
  serviceAccount: string = "";

  group: string = "";
  version: string = "";
  resource: string = "";
  eventType: Array<string> = new Array(0);
  filterAfterStart: boolean = true;
  lables: Array<FileOpt> = new Array(0);
  fields: Array<FileOpt> = new Array(0);


  constructor() {
  }
}
