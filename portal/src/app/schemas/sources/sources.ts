import { Log } from '../log';
import { SQSSource } from './sqs';
import { SNSSource } from './sns';
import { Metadata } from '../k8s/metadata';
import { PulsarSource }from './pulsar';
import { WebhookSource } from './webhook';
import { RedisSource } from './redis';
import { StripeSource } from "./stripe";
import { StorageGridSource } from './storage-grid';
import { SlackSource } from './slack';
import { AzureEventHubItem } from './azure-hub-item';
import { BitbucketSource } from './bitbucket';
import { CalendarSource } from './calendar';
import { GithubSource } from './github';
import { GitlabSource } from './gitlab';
import { KafkaSource } from './kafak';


export class Sources {
  metadata: Metadata;
  s3Logs: Array<Log>;
  SQSSource: Array<SQSSource>;
  SNSSource: Array<SNSSource>;
  PulsarSource: Array<PulsarSource>;
  Webhook: Array<WebhookSource>;
  Redis: Array<RedisSource>;
  Stripe: Array<StripeSource>;
  StorageGrid: Array<StorageGridSource>;
  Slack: Array<SlackSource>;
  AzureEventHub: Array<AzureEventHubItem>;
  Bitbucket: Array<BitbucketSource>;
  Calendars: Array<CalendarSource>;
  GitHub: Array<GithubSource>;
  GitLab: Array<GitlabSource>;
  Kafka: Array<KafkaSource>;

  /*
AMQP
Emitter
File
GCP Pub/Sub
Generic
hdfs
Minio
MQTT
NATS
NSQ
Resource

  */
  constructor() {
    this.s3Logs = new Array(0);
    this.SQSSource = new Array(0);
    this.SNSSource = new Array(0);
  }
}
