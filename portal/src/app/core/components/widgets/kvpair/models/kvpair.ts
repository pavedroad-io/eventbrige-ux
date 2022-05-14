export class KeyValuePair {
  key: string = '';
  value: string = '';

  constructor() {}
}

export class KeyValueList {
  list: Array<KeyValuePair> = new Array(0);
}
