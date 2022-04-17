export class SaaSService {
  name: string;
  plan: string;
  configkey: string; // the UUID for this customers configuration
  active: boolean;
  created: Date;
  updated: Date;
  suspensionDate: Date;
  planType: string = 'trial';
  trialDays: number;

  constructor(
    serviceName: string,
    billingPlan: string,
    isTrial: boolean,
    trialDays: number,
    limits: any
  ) {
    this.name = serviceName;
    this.plan = billingPlan;
    this.configkey = '';
    this.active = true;
    this.trialDays = trialDays;
    this.created = new Date();
    this.updated = new Date();
    this.suspensionDate = new Date();
    if (isTrial) {
      var future = new Date();
      this.suspensionDate.setDate(future.getDate() + trialDays);
    }
  }

  find(list: SaaSService[], key: string): SaaSService {
    for (var i = 0; i < list.length; i++) {
      if (list[i].name === key) {
        return list[i];
      }
    }

    return undefined
  }
}
