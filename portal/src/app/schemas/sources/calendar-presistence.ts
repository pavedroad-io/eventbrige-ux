import { CalendarCatchup } from './calendar-catchup';
import { CalendarConfigMap } from './calendar-configmap';



export class CalendarPresistence {
  catchup: CalendarCatchup = new CalendarCatchup();
  config: CalendarConfigMap = new CalendarConfigMap();

  constructor() {
  }
}
