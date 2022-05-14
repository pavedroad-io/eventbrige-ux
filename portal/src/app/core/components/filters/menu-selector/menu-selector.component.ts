import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NumberedMenuItem } from '../../../../schemas/numbered-menu-item';
@Component({
  selector: 'app-menu-selector',
  templateUrl: './menu-selector.component.html',
  styleUrls: ['./menu-selector.component.scss'],
})
export class MenuSelectorComponent implements OnInit {
  @Input() items: NumberedMenuItem[] = Array(0);
  @Input() title: string = '';
  @Input() navigate: string = '';
  @Input() maxDisplay: number = 4;
  @Output() menuAction: EventEmitter<NumberedMenuItem> =
    new EventEmitter<NumberedMenuItem>();
  @Output() reset: EventEmitter<boolean> = new EventEmitter<boolean>();
  unDisplay: number = 0;
  unDisplayText: string = ""
  constructor() {}

  ngOnInit(): void {
    this.unDisplay = this.items?.length - this.maxDisplay;
    this.unDisplayText = this.unDisplay + " more";
  }

  onSelect(e: NumberedMenuItem) {
    this.menuAction.emit(e);
  }

  onReset() {
    this.reset.emit(true);
    console.log("reset");
  }

  displayToggle() {
    if (this.maxDisplay == 4) {
      this.maxDisplay = this.items?.length;
      this.unDisplayText = "display less";
    } else {
      this.maxDisplay = 4;
      this.unDisplayText = this.unDisplay + " more";
    }
  }
}
