import { Hook } from './hook';
import { Dependencies } from './dependencies';
import { Triggers } from './triggers';
import { Sources } from './sources';
import { Workflows } from './workflow/workflows';
import { Code } from './code/code';

export class Configuration {
  hook: Hook;
  dependencies: Dependencies;
  triggers: Triggers;
  sources: Sources;

  // Arrays of UUIDs that point to records
  // in the generic code micro-service
  workflows: Array<string> = new Array(0);
  code: Array<string> = new Array(0); 

  name: string;
  environment: string;
  version: string;
  kubectx: string;
  manifests: string;
  templates: string;
  plogConfigID: string;

  constructor() {
    this.hook = new Hook();
    this.dependencies = new Dependencies();
    this.triggers = new Triggers();
    this.sources = new Sources();

    this.name = 'PavedRoad generated';
    this.environment = 'dev';
    this.version = '1.0.0';
    this.kubectx = 'microk8s';
    this.manifests = './manifest';
    this.templates = './tpl';
    this.plogConfigID = "";
  }
}
