import { PortMapping } from "./port-mapping";

export class Services {
  ports: Array<PortMapping>

  constructor() {
    this.ports = Array(0);
  }
}