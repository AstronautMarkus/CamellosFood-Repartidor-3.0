import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterFormService {
  private counter: number = 0;

  constructor() { }

  getCounterValue(): number {
    return this.counter;
  }

  incrementCounter() {
    this.counter++;
  }

  resetCounter() {
    this.counter = 0;
  }

}
