import { User } from './users';

export class Billing {
  billingPlan: string = '';
  billingUsers: Array<User> = new Array(0);
  active: Boolean = true;
  planType: string = "trial";
  create: Date = new Date();
  updated: Date = new Date();
  suspensionDate: Date = new Date();

  constructor() {
  }
}
