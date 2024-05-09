import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  standalone: true,
  imports: [],
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  @Output() counterFired: EventEmitter<number> = new EventEmitter<number>();
  interval: number = 0;
  lastNumber: number = 0;

  constructor() {
  }

  onStartGame(): void {
    this.interval = setInterval(() => {
      this.lastNumber++;
      this.counterFired.emit(this.lastNumber);
    }, 1000);
  }

  onStopGame(): void {
    clearInterval(this.interval);
  }
}
