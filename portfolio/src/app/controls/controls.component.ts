import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { GenerateColors, PauseColors, ColorState } from '../store/color';
import { faFillDrip, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  isPaused = this.store.select(ColorState.isPaused);

  icons = {
    faFillDrip,
    faPause,
    faPlay
  };

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
  }

  changeColor() {
    this.store.dispatch(new GenerateColors);
  }

  pause() {
    this.store.dispatch(new PauseColors);
  }

}
