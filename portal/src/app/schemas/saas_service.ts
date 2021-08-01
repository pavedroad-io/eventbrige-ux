
export class SaaSService{
  name: string
  plan: string
  configKey: string // the UUID for this customers configuration
  active: boolean
  created: Date
  updated: Date

  constructor(){
    name: "";
    plan: "";
    configKey: "";
    active: true;
    created: new Date();
    updated: new Date();
  }

}

