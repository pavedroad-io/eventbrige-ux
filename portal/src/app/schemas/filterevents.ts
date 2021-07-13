export class FilterEvents {
  matchedAPI: Array<string>;
  matchedHTTPMethods: Array<string>;
  matchedResouceTypes: Array<string>;

  constructor(){
    this.matchedAPI = new Array(0);
    this.matchedHTTPMethods = new Array(0);
    this.matchedResouceTypes = new Array(0);
  }
}
