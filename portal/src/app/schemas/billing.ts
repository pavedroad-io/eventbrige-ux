import { Contact } from './contact';

export class Billing {
  billingPlan: string

  billingContacts: Array<Contact> 

  constructor(){
    this.billingContacts = new Array(0);
    billingPlan: "";
    create: new Date();
    updated: new Date();
  }
}
