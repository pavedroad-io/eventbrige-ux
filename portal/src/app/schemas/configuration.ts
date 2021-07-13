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

    this.name = "";
    this.environment = "";
    this.version = "";
    this.kubectx = "";
    this.manifests = "";
    this.templates = "";
  }
  
}
