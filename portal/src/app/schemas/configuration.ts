import { Hook } from './hook';
import { Dependencies } from './dependencies';
import { Triggers } from './triggers';
import { Sources } from './sources';

export class Configuration {
  hook: Hook;
  dependencies: Dependencies;
  triggers: Triggers;
  sources: Sources;

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
