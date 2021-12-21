import { Component, OnInit } from '@angular/core';

import { Metadata } from '../../../schemas/k8s/metadata';

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.scss']
})
export class MetadataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
