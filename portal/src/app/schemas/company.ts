import { Contact } from './contact';
import { Billing } from './billing';

export class Company {
  id: string
  name: string
  address: string
  city: string
  state: string
  zip: string

  created: Date
  updated: Date

  billingdetails: Billing
  contacts: Array<Contact>


  constructor(){
    this.contacts = new Array(0);
    this.billingdetails = new (Billing);
    this.id = "";
    this.name = "";
    this.address = "";
    this.city = "";
    this.state = "";
    this.zip = "";
    this.created = new Date();
    this.updated = new Date();
  }
}
