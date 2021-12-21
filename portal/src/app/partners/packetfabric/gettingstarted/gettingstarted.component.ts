import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';



const samplecode = `
import json
import boto3
import urllib.parse
from types import SimpleNamespace
import hashlib

def lambda_handler(event, context):
   # REST.PUT.OBJECT sca%2F "PUT /pr-release-pipeline-artifacts/sca/"
   # print("Event: ", event)
   # print("Data: ", event['data'])

    data = json.loads(event['data'])

    op = data['operation']
    uri = data['requestURI']
    bucket = data['bucket']
    key = urllib.parse.unquote_plus(data['key'], encoding='utf-8')
    l = len(key) -1

    s3 = boto3.client('s3',
        endpoint_url = 'https://s3.us-west-1.packetfabric.com',
        aws_access_key_id='XXXXXXXXXXXXXXXXXXXXXXXXXXX',
        aws_secret_access_key='XXXXXXXXXXXXXXXXXXXXXXXXXXX')

    if op == "REST.PUT.OBJECT" and key.endswith('/') == False and key.endswith('.md5') == False:
        resp = s3.response = s3.get_object(Bucket=bucket, Key=key)
        content = resp['Body'].read()
        md5 = hashlib.md5(content)
        response = s3.put_object(
          Body=md5.hexdigest(),
          Bucket=bucket,
          Key=key+'.md5',
        )
        if response['ResponseMetadata']['HTTPStatusCode'] != 200:
            return {
                'statusCode': 400,
                'body': json.dumps("writing md5 failed")
            }
        else:
            return {
                'statusCode': 200,
                'body': json.dumps(md5.hexdigest())
        }
    else:

        return {
            'statusCode': 200,
           'body': json.dumps("no action taken")
    }
`

@Component({
  selector: 'app-gettingstarted',
  templateUrl: './gettingstarted.component.html',
  styleUrls: ['./gettingstarted.component.scss'],
})
export class GettingstartedPFComponent implements OnInit {
  code: string = samplecode;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
}
