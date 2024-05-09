import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GameControlComponent} from "./game-control/game-control.component";
import {NgForOf} from "@angular/common";
import {OddComponent} from "./odd/odd.component";
import {EvenComponent} from "./even/even.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GameControlComponent, NgForOf, OddComponent, EvenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'section5_practice';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onCounterFired(num: number) {
    console.log(num);
    if (num % 2 == 0) {
      this.evenNumbers.push(num);
    } else {
      this.oddNumbers.push(num);
    }
  }
}
