import { User } from './users';
import { Billing } from './billing';
import { SaaSService } from './saas_service';

export class Organization {
  organizationuuid: string
  name: string
  address: string
  city: string
  state: string
  zip: string
  services: Array<SaaSService>

  created: Date
  updated: Date


  billingdetails: Billing
  members: Array<User>


  constructor(){
    this.members = new Array(0);
    this.services = new Array(0);
    this.billingdetails = new (Billing);
    this.organizationuuid = "";
    this.name = "";
    this.address = "";
    this.city = "";
    this.state = "";
    this.zip = "";
    this.created = new Date();
    this.updated = new Date();
  }
}
