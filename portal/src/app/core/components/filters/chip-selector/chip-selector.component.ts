import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  Component,
  EventEmitter,
  OnInit,
  ElementRef,
  ViewChild,
  Input,
  Output,
} from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import {
  MatAutocompleteSelectedEvent,
  MatAutocomplete,
} from '@angular/material/autocomplete';

import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { EventSourcesService } from 'src/app/services/event.sources.service';

@Component({
  selector: 'app-chip-selector',
  templateUrl: './chip-selector.component.html',
  styleUrls: ['./chip-selector.component.scss'],
})
export class ChipSelectorComponent implements OnInit {
  @Input() allChips: any[] = Array(0);
  @Input() selectedChips: string[] = ['SNS', 'S3'];
  @Input() title: string = 'Chip list';
  @Input() prompt: string = 'Filter items';
  @Input() navigate: string = '/sources';
  @Output() chipsEvent: EventEmitter<string[]> = new EventEmitter<string[]>();

  filteredChips: Observable<string[]>;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  chipCtrl = new FormControl('');
  visible = true;
  selectable = true;
  removable = true;

  @ViewChild('chipInput') chipInput: ElementRef<HTMLInputElement>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private eventSourceService: EventSourcesService
  ) {
    this.filteredChips = this.chipCtrl.valueChanges.pipe(
      startWith(null),
      map((chip: string | null) =>
        chip ? this._filter(chip) : this.allChips.slice()
      )
    );
    this.chipsEvent.emit(this.selectedChips);
  }

  ngOnInit(): void {}

  /*
  add(event: MatChipInputEvent): void {
    // TODO: Don't allow dups
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.selectedChips.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.chipCtrl.setValue(null);
    this.chipsEvent.emit(this.selectedChips);
  }
 */

  remove(chip: string): void {
    const index = this.selectedChips.indexOf(chip);

    if (index >= 0) {
      this.selectedChips.splice(index, 1);
    }
    this.chipsEvent.emit(this.selectedChips);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedChips.push(event.option.viewValue);
    this.chipInput.nativeElement.value = '';
    this.chipCtrl.setValue(null);
    this.chipsEvent.emit(this.selectedChips);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allChips.filter(
      (chip) => chip.toLowerCase().indexOf(filterValue) === 0
    );
  }
}
