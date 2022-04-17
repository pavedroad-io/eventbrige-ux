import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnInit, AfterViewInit, Output, ViewChild } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { TableButtonAction } from 'src/app/shared/models/tableButtonAction';
import { TableColumn } from 'src/app/shared/models/tableColumn';

@Component({
  selector: 'app-mat-custom-table',
  templateUrl: './mat-custom-table.component.html',
  styleUrls: ['./mat-custom-table.component.css'],
})
export class MatCustomTableComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @Output() action: EventEmitter<TableButtonAction> = new EventEmitter<TableButtonAction>()
  @Output() tableAction: EventEmitter<string> = new EventEmitter<string>()
  @Input() columns: Array<TableColumn>;
  @Input() dataset: Array<any> = [];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource: MatTableDataSource<any>;
  selection = new SelectionModel<any>(true, []);
  displayedColumns: string[] = [];
  value: string;
  constructor() { }


  ngOnInit() {
    // set checkbox column
    this.displayedColumns.push("select");

    // set table columns
    this.displayedColumns = this.displayedColumns.concat(this.columns.map(x => x.columnDef));    // pre-fix static

    // add action column
    this.displayedColumns.push("action");
    this.dataSource = new MatTableDataSource<any>(this.dataset);

    // set pagination
    this.dataSource.paginator = this.paginator;
  }

  onTableAction(e: TableButtonAction): void {
    this.action.emit(e);
  }

  onToolbarCreate(e: any): void {
    this.tableAction.emit("create");
  }

  onToolbarDelete(e: any): void {
    this.tableAction.emit("delete");
  }
  onToolbarRefresh(e: any): void {
    this.tableAction.emit("refresh");
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public reload() {
    this.dataSource = new MatTableDataSource<any>(this.dataset);
    this.dataSource.paginator = this.paginator;
  }
}


