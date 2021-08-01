import { Organization } from './organization';
import { Provider } from './provider';
import { Configuration } from './configuration';
import { Log } from './log';

export class Customers {
  customersuuid: string
  providers: Array<Provider>
  configuration: Configuration
  logs: Array<Log>
  short: string
  name: string
  created: Date
  updated: Date

  constructor(){
    this.providers = new Array(0);
    this.logs = new Array(0);
    this.configuration = new (Configuration);
    this.customersuuid = "";
    this.short = "";
    this.name  = "";
    this.created = new Date();
    this.updated = new Date();
  }
}
