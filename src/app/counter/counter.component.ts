import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Output()
  xxx: EventEmitter<number> = new EventEmitter();


  setCount(value: number): void {
    this.xxx.emit(value);
  }
}
