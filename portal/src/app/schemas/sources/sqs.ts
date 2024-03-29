import { Metadata } from '../k8s/metadata'

export class SQSSource {
  metadata: Metadata = new Metadata();
  accessKey: string // AccessKey refers K8s secret containing aws access key
  secretKey: string // SecretKey refers K8s secret containing aws secret key
  region: string    // AWS region
  queue: string     // Queue in SQS to listen on 
  waits: number     // Timeout for waiting on messages
  roleARN: string   // ARN role to assume for listening optional
  jsonBody: boolean // Is body in JSON optional
  queueAccountId: string //Account id that created the queue optional
  dlq: boolean // Is dead-letter queue configured optional / defaut = false


  constructor() {
    this.metadata.name = "";
    this.metadata.source = "";
    this.metadata.namespace = "";
    this.accessKey = "required";
    this.secretKey = "required";   
    this.region = "us-west-1";
    this.queue = "";
    this.waits = 600;
    this.roleARN = "";
    this.jsonBody = true;
    this.queueAccountId = "";
    this.dlq = false;
  }
}
