import { User } from './users';

export class Billing {
  billingPlan: string

  billingUsers: Array<User> 

  constructor(){
    this.billingUsers = new Array(0);
    billingPlan: "";
    create: new Date();
    updated: new Date();
  }
}
