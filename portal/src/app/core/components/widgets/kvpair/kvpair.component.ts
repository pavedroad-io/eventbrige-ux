import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

import { KeyValueList, KeyValuePair } from './models/kvpair';

@Component({
  selector: 'app-kvpair',
  templateUrl: './kvpair.component.html',
  styleUrls: ['./kvpair.component.scss'],
})
export class KvpairComponent implements OnInit {
  @Input() title: string = 'Key value pairs';
  @Input() subTitle: string = '';
  @Output() @Input() list: KeyValuePair[] = Array(0);
  form: FormGroup;
  kvList: {
    key: string;
    value: string;
  }[] = new Array(0);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      pairs: this.fb.array([
      ]),
    });
    this.loadPairs();
  }

  ngOnInit(): void {
  }

  loadPairs() {
    if (this.list.length > 0) {
      this.list.forEach((item) => {
        this.addPair(item);
      });
    } else {
      this.newPair();
    }
  }

  addPair(pair: KeyValuePair) {
    this.pairs.push(
      this.fb.group({
        key: [pair.key, Validators.required],
        value: [pair.value, Validators.required],
      })
    );
  }

  get pairs() {
    return this.form.controls['pairs'] as FormArray;
  }

  newPair(): void {
    this.pairs.push(
      this.fb.group({
        key: ['', Validators.required],
        value: ['', Validators.required],
      })
    );
    this.list.push(new KeyValuePair());
  }

  add() {
    this.newPair();
  }

  delete(Index: number) {
    this.pairs.removeAt(Index);
    this.list.slice(Index);
  }
}
