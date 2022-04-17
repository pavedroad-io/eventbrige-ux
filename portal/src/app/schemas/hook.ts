export class Hook {
  name: string;
  endpoint: string;
  port: string;
  methods: string;
  constructor() {
    this.name = 'eventbridge';
    this.endpoint = '/';
    this.port = '12002';
    this.methods = "POST";
  }
}
