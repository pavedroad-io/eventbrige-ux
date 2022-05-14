import { GenericFunction } from './function/generic';

export class Code {
  genericFunction: Array<GenericFunction> = new Array(0);
  columns: genericFunctionColumns;

  addMissing(instance) {
    if (instance.genericFunction == undefined) instance.genericFunction = new Array(0);
  }

  tableView(instance) {
    let dataTableSource: Array<any> = [];

    /** GenericFunction */
    if (instance.genericFunction != undefined &&
        instance.genericFunction.length > 0) {
      instance.genericFunction.forEach((item) => {
        let newItem: genericFunctionTable = {
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

export class genericFunctionTable {
  type: string = "";
  name: string = "";
  environments:Array<string> = new Array(0);

  constructor(data: Partial<genericFunctionTable>) {
    Object.assign(this, data);
  }
}

export class genericFunctionColumns {
  columns:Array<any>;

  constructor() {
    this.columns = [
      { columnDef: 'name', header: 'Name' },
      { columnDef: 'type', header: 'Type' },
      { columnDef: 'environments', header: 'Environments' },
    ];
  }
}
