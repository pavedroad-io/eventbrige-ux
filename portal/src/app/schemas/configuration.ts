import { Hook } from './hook';
import { Dependencies } from './dependencies';
import { Triggers } from './triggers';

export class Configuration {
  hook: Hook;
  dependencies: Dependencies;
  triggers: Triggers;

  name: string;
  environment: string;
  version: string;
  kubectx: string;
  manifests: string;
  templates: string;
  
  constructor(){
    this.hook = new (Hook);
    this.dependencies = new (Dependencies);
    this.triggers = new (Triggers);

    this.name = "PavedRoad generated";
    this.environment = "dev";
    this.version = "1.0.0";
    this.kubectx = "microk8s";
    this.manifests = "./manifest";
    this.templates = "./tpl";
  }
  
}
