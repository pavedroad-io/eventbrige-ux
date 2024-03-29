
import { Metadata } from '../k8s/metadata';
import { K8SSecret } from '../k8s/secret';
import { ConnectionBackoff } from './connection-backoff';
import { Exchange } from './exchange';
import { Consume } from './consume';
import { Queue } from './queue';


export class AMQPSource {
  metadata: Metadata = new Metadata();
  url: string = "";
  jsonBody: boolean = true;
  exchangeName: string = "";
  exchangeType = "fanout";
  routingKey = "mykey";

  backoff: ConnectionBackoff = new ConnectionBackoff();
  exchangeDeclare: Exchange = new Exchange();
  queueDeclare:  Queue = new Queue();
  queueBindNoWait: boolean = false;
  consume: Consume = new Consume();


  provider:  K8SSecret = new K8SSecret();

  constructor(data: Partial<AMQPSource>) {
    Object.assign(this, data);
  }
}
