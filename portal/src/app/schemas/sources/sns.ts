import { Metadata } from '../k8s/metadata';
import { KeyValuePair } from '../k8s/kvpair';
import { Hook } from '../hook';

export class SNSSource {
  metadata: Metadata;

  // AccessKey refers K8s secret containing AWS access key
  awsSecret: KeyValuePair;

  webhook: Hook; // A Webhook to receive messages on

  region: string; // AWS region
  roleARN: string; // ARN role to assume for listening optional
  topicARN: string; // ARN for topic to receive
  validateSignature: boolean; // enable signature validation

  constructor() {
    this.metadata = new Metadata();
    this.webhook = new Hook();
    this.awsSecret = new KeyValuePair();

    this.region = 'us-west-1';
    this.roleARN = '';

    this.topicARN = '';
    this.validateSignature = false;
  }

  flatten() {
    var rv = new SNSSourceDisplay();
    rv.name = this.webhook.name;
    rv.provider = this.awsSecret.key;
    rv.region = this.region;
    rv.role = this.roleARN;
    rv.topic = this.topicARN;
    rv.validateSignature = this.validateSignature;
    rv.webhook = this.webhook.endpoint;
    rv.methods = this.webhook.methods;
    return rv;
  }
}

export class SNSSourceDisplay {
  name: string;
  provider: string;
  region: string;
  role: string;
  topic: string;
  validateSignature: boolean;
  webhook: string;
  methods: string;
}
