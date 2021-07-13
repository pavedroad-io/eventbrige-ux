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
    customersuuid: "";
    short: "";
    name: "";
    create: new Date();
    updated: new Date();
  }
}
