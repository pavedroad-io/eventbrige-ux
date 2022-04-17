
export class PortMapping {
  name: string
  protocol: string
  source: number
  target: number

  constructor() {
    this.name = "";
    this.protocol = "";
    this.source = 0;
    this.target = 0;
  }
}
