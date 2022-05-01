import { Metadata } from '../k8s/metadata';
import { KeyValuePair } from '../k8s/kvpair';
import { Hook } from '../hook';

export class SNSSource {
  snsmetadata: Metadata;

  // AccessKey refers K8s secret containing AWS access key
  awssecret: KeyValuePair;

  snshook: Hook; // A Webhook to receive messages on

  region: string; // AWS region
  roleARN: string; // ARN role to assume for listening optional
  topicARN: string; // ARN for topic to receive
  validateSignature: boolean; // enable signature validation

  constructor(source: Partial<SNSSource>) {
    this.snsmetadata = new Metadata();
    this.snshook = new Hook();
    this.awssecret = new KeyValuePair();

    this.region = 'us-west-1';
    this.roleARN = '';

    this.topicARN = '';
    this.validateSignature = false;
    Object.assign(this, source);
  }

  flatten() {
    var rv = new SNSSourceDisplay();
    rv.name = this.snsmetadata.name;
    rv.provider = this.awssecret.key;
    rv.region = this.region;
    rv.role = this.roleARN;
    rv.topic = this.topicARN;
    rv.validateSignature = this.validateSignature;
    rv.webhook = this.snshook.endpoint;
    rv.methods = this.snshook.methods;
    return rv;
  }

  find(key: string, list: SNSSource[]) {
    let rv: SNSSource;
    list.forEach((item) => {
      if (item.snsmetadata.name === key) {
        rv = item;
      }
    });
	      console.log(rv);
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
