import { WebHook } from './webhook';

export class WebHookList {
  name: string
  webhooks: Array<WebHook>;

  constructor() {
    this.name = '';
    this.webhooks = Array(0);
  }
}
