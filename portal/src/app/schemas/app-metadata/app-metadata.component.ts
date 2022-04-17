import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-metadata',
  templateUrl: './app-metadata.component.html',
  styleUrls: ['./app-metadata.component.scss']
})
export class AppMetadataComponent implements OnInit {
  customer_id: string = "";
  eventbrid_config_id: string = "";

  aws_id: string = "";
  aws_block_storage_id: string = "";
  aws_function_id: string = "";

  wasabi_id: string = "";
  wasabi_block_storage_id: string = "";

  azure_id: string = "";
  azure_block_storage_id: string = "";
  azure_function_id: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
