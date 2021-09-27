export class Provider {
  name: string;
  credentials: string;
  key: string;
  region: string;
  endpoint: string;

  constructor() {
    this.name = '';
    this.credentials = '';
    this.key = '';
    this.region = '';
    this.endpoint = '';
  }
}
