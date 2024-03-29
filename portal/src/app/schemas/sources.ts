import { AMQPSource } from './sources/amqp';
import { AzureEventHubItem } from './sources/azure-hub-item';
import { BitbucketSource } from './sources/bitbucket';
import { CalendarSource } from './sources/calendar';
import { EmitterSource } from './sources/emitter';
import { FileSource } from './sources/file';
import { GCPPubSubSource } from './sources/gcppubsub';
import { GCPWorkflowSource } from './sources/gcpworkload';
import { GenericSource } from './sources/generic';
import { GithubSource } from './sources/github';
import { GitlabSource } from './sources/gitlab';
import { HDFSSource } from './sources/hdfs';
import { K8SResourceSource } from './sources/k8sresource';
import { KafkaSource } from './sources/kafak';
import { MinioSource } from './sources/minio';
import { MQTTSource } from './sources/mqtt';
import { NSQSource } from './sources/nsq';
import { PulsarSource } from './sources/pulsar';
import { RedisSource } from './sources/redis';
import { ResourceSource } from './sources/resource';
import { SlackSource } from './sources/slack';
import { S3Source } from './sources/s3';
import { SNSSource } from './sources/sns';
import { SQSSource } from './sources/sqs';
import { StorageGridSource } from './sources/storage-grid';
import { StripeSource } from './sources/stripe';
import { WebhookSource } from './sources/webhook';

export class Sources {
  amqp: Array<AMQPSource>;
  bitbucket: Array<BitbucketSource>;
  calendar: Array<CalendarSource>;
  emitter: Array<EmitterSource>;
  file: Array<FileSource>;
  GCPpubSub: Array<GCPPubSubSource>;
  GCPworkflow: Array<GCPWorkflowSource>;
  generic: Array<GenericSource>;
  github: Array<GithubSource>;
  gitlab: Array<GitlabSource>;
  hdfs: Array<HDFSSource>;
  k8sResource: Array<K8SResourceSource>;
  kafka: Array<KafkaSource>;
  minio: Array<MinioSource>;
  mqtt: Array<MQTTSource>;
  nsq: Array<NSQSource>;
  pulsar: Array<PulsarSource>;
  redis: Array<RedisSource>;
  resource: Array<ResourceSource>;
  slack: Array<SlackSource>;
  s3: Array<S3Source>;
  sns: Array<SNSSource>;
  sqs: Array<SQSSource>;
  storageGrid: Array<StorageGridSource>;
  stripe: Array<StripeSource>;
  webhook: Array<WebhookSource>;
  columns: genericSourceColumns;

  constructor() {
    this.amqp = new Array(0);
    this.bitbucket = new Array(0);
    this.calendar = new Array(0);
    this.emitter = new Array(0);
    this.file = new Array(0);
    this.GCPpubSub = new Array(0);
    this.GCPworkflow = new Array(0);
    this.generic = new Array(0);
    this.github = new Array(0);
    this.gitlab = new Array(0);
    this.hdfs = new Array(0);
    this.k8sResource = new Array(0);
    this.kafka = new Array(0);
    this.minio = new Array(0);
    this.mqtt = new Array(0);
    this.nsq = new Array(0);
    this.pulsar = new Array(0);
    this.redis = new Array(0);
    this.resource = new Array(0);
    this.slack = new Array(0);
    this.s3 = new Array(0);
    this.sns = new Array(0);
    this.sqs = new Array(0);
    this.storageGrid = new Array(0);
    this.stripe = new Array(0);
    this.webhook = new Array(0);
    this.columns = new genericSourceColumns();
  }

  addMissing(instance:Sources) {
    if (instance.amqp == undefined) instance.amqp = new Array(0);
    if (instance.bitbucket == undefined) instance.bitbucket = new Array(0);
    if (instance.calendar == undefined) instance.calendar = new Array(0);
    if (instance.emitter == undefined) instance.emitter = new Array(0);
    if (instance.file == undefined) instance.file = new Array(0);
    if (instance.GCPpubSub == undefined) instance.GCPpubSub = new Array(0);
    if (instance.GCPworkflow == undefined) instance.GCPworkflow = new Array(0);
    if (instance.generic == undefined) instance.generic = new Array(0);
    if (instance.gitlab == undefined) instance.gitlab = new Array(0);
    if (instance.github == undefined) instance.github = new Array(0);
    if (instance.hdfs == undefined) instance.hdfs = new Array(0);
    if (instance.k8sResource == undefined) instance.k8sResource = new Array(0);
    if (instance.kafka == undefined) instance.kafka = new Array(0);
    if (instance.minio == undefined) instance.minio = new Array(0);
    if (instance.mqtt == undefined) instance.mqtt = new Array(0);
    if (instance.nsq == undefined) instance.nsq = new Array(0);
    if (instance.pulsar == undefined) instance.pulsar = new Array(0);
    if (instance.redis == undefined) instance.redis = new Array(0);
    if (instance.resource == undefined) instance.resource = new Array(0);
    if (instance.slack == undefined) instance.slack = new Array(0);
    if (instance.s3 == undefined) instance.s3 = new Array(0);
    if (instance.sns == undefined) instance.sns = new Array(0);
    if (instance.sqs == undefined) instance.sqs = new Array(0);
    if (instance.storageGrid == undefined) instance.storageGrid = new Array(0);
    if (instance.stripe == undefined) instance.stripe = new Array(0);
    if (instance.webhook == undefined) instance.webhook = new Array(0);
  }

  /** tableView given an instance of sources create a dataSource compatible
      with material datatables 

     @param instance: an instance of sources
  
  */
  tableView(instance:Sources) {
    let dataTableSource: Array<any> = [];

    /** AMQP sources */
    if (instance.amqp != undefined &&
        instance.amqp.length > 0) {
      instance.amqp.forEach((item:AMQPSource) => {
        let newItem: genericSourceEventTable = {
          type: 'amqp',
          name: item.metadata.name,
          provider: item.provider.key,
          region: '',
          webhook: '',
          events: '',
          methods: '',
        };
        dataTableSource.push(newItem);
      });
    }

    /** AzureEventHubItem sources
    if (instance.az.length > 0) {
      instance.AMQPSource.forEach((item) => {
        let newItem: genericSourceEventTable = {
          type: 'AzureEventHub',
          name: item.metadata.name,
          provider: item.provider.key,
          region: '',
          webhook: '',
          events: '',
          methods: '',
        };
      });
    }
    */

    /** BitbucketSource sources */
    if (instance.bitbucket != undefined &&
        instance.bitbucket.length > 0) {
      instance.bitbucket.forEach((item: BitbucketSource) => {
        let newItem: genericSourceEventTable = {
          type: 'Bitbucket',
          name: item.metadata.name,
          provider: item.accessToken.key,
          region: '',
          webhook: '',
          events: item.events.toString(),
          methods: '',
        };
        dataTableSource.push(newItem);
      });
    }

    /** CalendarSource */
    if (instance.calendar != undefined &&
        instance.calendar.length > 0) {
      instance.calendar.forEach((item: CalendarSource) => {
        let newItem: genericSourceEventTable = {
          type: 'Calendar',
          name: item.metadata.name,
          provider: '',
          region: '',
          webhook: '',
          events: item.interval,
          methods: item.scheduler,
        };
        dataTableSource.push(newItem);
      });
    }

    /** SNSSource */
    if (instance.sns != undefined &&
        instance.sns.length > 0) {
      instance.sns.forEach((item: SNSSource) => {
        let newItem: genericSourceEventTable = {
          type: 'SNS',
          name: item.snsmetadata.name,
          provider: item.awssecret.key,
          region: item.region,
          webhook: item.snshook.name,
          events: item.topicARN,
          methods: '',
        };
        dataTableSource.push(newItem);
      });
    }

    /** all the rest to come */

    return dataTableSource;
  }

  getColumns() {
    return this.columns.columns;
  }
}

export class genericSourceEventTable {
  type: string = '';
  name: string = '';
  provider: string = '';
  region: string = '';
  webhook: string = '';
  events: string = '';
  methods: string = '';

  constructor(data: Partial<genericSourceEventTable>) {
    Object.assign(this, data);
  }
}

export class genericSourceColumns {
  columns:Array<any> = new Array(0);

  constructor() {
    this.columns = [
      { columnDef: 'type', header: 'Type' },
      { columnDef: 'name', header: 'Name' },
      { columnDef: 'provider', header: 'Provider' },
      { columnDef: 'region', header: 'Region' },
      { columnDef: 'webhook', header: 'Webhook' },
      { columnDef: 'events', header: 'Events' },
      { columnDef: 'methods', header: 'Methods' },
    ];
  }
}
