import { Metadata } '../k8s/metadata'

export class SNSSource {
  metadata: Metadata
  accessKey: string // AccessKey refers K8s secret containing aws access key
  secretKey: string // SecretKey refers K8s secret containing aws secret key
  region: string    // AWS region
  roleARN: string   // ARN role to assume for listening optional
  webhook: string   // To receive messages on
  topicARN: string  // ARN for topic to receive
  validateSignature: bool // enable signature validation


  constructor() {
    this.metadata.name = "";
    this.metadata.source = "";
    this.metadata.namespace = "";

    this.accessKey = "required";
    this.secretKey = "required";   
    this.region = "us-west-1";
    this.roleARN = "";

    this.webhook = "";
    this.topicARN = "";
    this.validateSignature = false;:

  }
}
