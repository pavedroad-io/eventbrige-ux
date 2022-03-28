import { FilterEvents } from './filterevents';

export class Log {
  filterevents: FilterEvents;
  name: string;
  logFormat: string;
  provider: string;
  pruneAfterProcessing: boolean;

  constructor() {
    this.filterevents = new FilterEvents();

    this.name = '';
    this.logFormat = '';
    this.provider = '';
    this.pruneAfterProcessing = false;
  }

  members() {

  }
}
