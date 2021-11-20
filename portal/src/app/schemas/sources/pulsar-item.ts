
export class PulsarItem {
  name: string = "";
  utl: string = "";
  topics: Array<string>;
  type: string = ""

  constructor() {
    this.topics = Array(0);
  }
}
