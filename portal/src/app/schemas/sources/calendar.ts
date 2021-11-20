import { Services } from './services';
import { WebHookList } from '../webhooklist';
import { Metadata } from '../k8s/metadata';
import { K8SSecret } from '../k8s/secret';
import { KeyValuePair } from '../k8s/kvpair';
import { CalendarPresistence } from './calendar-presistence';

export class CalendarSource {
  metadata: Metadata;
  interval: string = "";
  scheduler: string = "* * * * *";
  persistence: CalendarPresistence;
  userPayload: string = '';
  timezone: string = 'America/New_York';
  exlustionDate: Array<string>;



  constructor() {
    this.metadata = new Metadata();
    this.exlustionDate = new Array(0);
  }
}
