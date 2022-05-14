import { GenericWorkflow } from './generic';
/**
* Workflows
*/
export class Workflows {
  genericWorkflows: Array<GenericWorkflow> = new Array(0);
  columns: genericWorkflowColumns;


  addMissing(instance) {
    if (instance.genericWorkflows == undefined) instance.genericWorkflows = new Array(0);
  }

  tableView(instance) {
    let dataTableSource: Array<any> = [];

    /** GenericWorkflow */
    if (instance.genericWorkflows != undefined &&
        instance.genericWorkflows.length > 0) {
      instance.genericWorkflows.forEach((item) => {
        let newItem: genericWorkflowTable = {
          type: item.type,
          name: item.name,
          environments: item.environments.toString()
        };
      });
    }
    return dataTableSource;
  }

  getColumns() {
    return this.columns.columns;
  }
}

export class genericWorkflowTable {
  type: string = "";
  name: string = "";
  environments:Array<string> = new Array(0);

  constructor(data: Partial<genericWorkflowTable>) {
    Object.assign(this, data);
  }
}

export class genericWorkflowColumns {
  columns:Array<any>;

  constructor() {
    this.columns = [
      { columnDef: 'name', header: 'Name' },
      { columnDef: 'type', header: 'Type' },
      { columnDef: 'environments', header: 'Environments' },
    ];
  }
}
