import { Lambda } from './lambda';

export class Triggers {
  lambda: Array<Lambda>;

  constructor() {
    this.lambda = new Array(0);
  }
}
