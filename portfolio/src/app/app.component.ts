import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ReadFeatures, FeatureState } from './store';
import { GenerateColors } from './store/color';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  getFeatures = this.store.select(FeatureState.getFeatures);
  activeFeature = this.store.select(FeatureState.getActiveFeature);

  constructor(
    private store: Store
  ) {

  }

  ngOnInit() {
    this.store.dispatch([
      new ReadFeatures,
      new GenerateColors
    ]);
  }
}
