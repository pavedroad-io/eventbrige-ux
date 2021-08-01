export class Dependencies {
  name: string;
  eventSourceName: string;
  eventName: string;
  constructor(){
    this.name = "eventbridge-dep";
    this.eventSourceName = "eventbridge";
    this.eventName = "eventbridge";
  }
}
