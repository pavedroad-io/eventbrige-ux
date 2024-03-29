import { Services } from './services';
import { WebHookList } from '../webhooklist';
import { Metadata } from '../k8s/metadata';
import { K8SSecret } from '../k8s/secret';
import { KeyValuePair } from '../k8s/kvpair';
import { CalendarPresistence } from './calendar-presistence';

export class CalendarSource {
  metadata: Metadata = new Metadata();
  interval: string = "";
  scheduler: string = "* * * * *";
  persistence: CalendarPresistence = new CalendarPresistence();
  userPayload: string = '';
  timezone: string = 'America/New_York';
  exlustionDate: Array<string> = new Array(0);

  constructor() {
  }
}
