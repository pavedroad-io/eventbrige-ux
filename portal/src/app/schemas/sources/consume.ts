
export class Consume {
  consumerTag: string = "";
  autoAck: boolean = true;
  exclusive: boolean = false;
  noLocal: boolean = false;
  noWait: boolean = false;

  constructor() {
  }
}
