
export class ConnectionBackoff {
  duration: string = "10s"
  steps: number = 5;
  factor: number = 2;
  jitter: number = 0.2;

  constructor() {
  }
}
