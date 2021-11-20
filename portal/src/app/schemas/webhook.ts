import { K8SSecret } from "./k8s/secret";

export class WebHook {
  endpoint: string;  // "/ | /foobar"
  port: string;      // none or 8080
  method: string;    // HTTP method
  url: string;       // Used by bitbucket
  secret: K8SSecret; // A k8s secret from a config map

  constructor() {
    this.endpoint = '/';
    this.port = '12000';
    this.method = 'POST';
    this.url = '';
    this.secret =  new K8SSecret();
  }
}
