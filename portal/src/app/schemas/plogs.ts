/*
Processed log 
*/

import { processedItems } from './processedItems';

export class Plogs {
  plogsuuid: string = '';
  created: string;
  updated: string;
  processeditems: Array<processedItems>;

  constructor() {
    this.processeditems = new Array(0);
    this.created = new Date().toISOString();
    this.updated = new Date().toISOString();
  }
}
