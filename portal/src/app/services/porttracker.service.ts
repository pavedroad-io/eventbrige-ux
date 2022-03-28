import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PorttrackerService {
  private _nextPort: number = 11000;

  constructor() {
  }

  public nextPort() {
    this._nextPort++;
    return this._nextPort.toString();
  }
}
