import { Log } from '../log'; // S3 log ingest
import { SQSSource } from './sqs';
import { SNSSource } from './sns';
import { Metadata } from '../k8s/metadata';
import { PulsarSource } from './pulsar';
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
import { GCPPubSubSource } from './gcppubsub';
import { GCPWorkflowSource } from './gcpworkload';
import { EmitterSource } from './emitter';
import { GenericSource } from './generic';
import { MinioSource } from './minio';
import { MQTTSource } from './mqtt';
import { NSQSource } from './nsq';
import { AMQPSource } from './amqp';
import { FileSource } from './file';
import { HDFSSource } from './hdfs';
import { ResourceSource } from './resource';



export class Sources {
  metadata: Metadata = new Metadata();
  s3Logs: Array<Log> = new Array(0);
  SQSSource: Array<SQSSource> = new Array(0);
  SNSSource: Array<SNSSource> = new Array(0);
  PulsarSource: Array<PulsarSource> = new Array(0);
  Webhook: Array<WebhookSource> = new Array(0);
  Redis: Array<RedisSource> = new Array(0);
  Stripe: Array<StripeSource> = new Array(0);
  StorageGrid: Array<StorageGridSource> = new Array(0);
  Slack: Array<SlackSource> = new Array(0);
  AzureEventHub: Array<AzureEventHubItem> = new Array(0);
  Bitbucket: Array<BitbucketSource> = new Array(0);
  Calendars: Array<CalendarSource> = new Array(0);
  GitHub: Array<GithubSource> = new Array(0);
  GitLab: Array<GitlabSource> = new Array(0);
  Kafka: Array<KafkaSource> = new Array(0);
  GCPPubSub: Array<GCPPubSubSource> = new Array(0);
  GCPWorkflow: Array<GCPWorkflowSource> = new Array(0);
  Emitter: Array<EmitterSource> = new Array(0);
  Genric: Array<GenericSource> = new Array(0);
  Minio: Array<MinioSource> = new Array(0);
  MQTT: Array<MQTTSource> = new Array(0);
  NSQ: Array<NSQSource> = new Array(0);
  AMQP: Array<AMQPSource> = new Array(0);
  File: Array<FileSource> = new Array(0);
  HDFS: Array<HDFSSource> = new Array(0);
  Resouce: Array<ResourceSource> = new Array(0);


  constructor() {
  }
}
