import { CalendarCatchup } from './calendar-catchup';
import { CalendarConfigMap } from './calendar-configmap';



export class CalendarPresistence {
  catchup: CalendarCatchup;
  config: CalendarConfigMap;

  constructor() {
    this.catchup = new (CalendarCatchup);
    this.config = new (CalendarConfigMap);
  }
}
