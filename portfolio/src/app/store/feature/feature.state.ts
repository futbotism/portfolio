import { HttpClient } from '@angular/common/http';
import { Action, Selector, State as ngxsState, StateContext } from '@ngxs/store';
import { map } from 'rxjs/operators';

import * as Actions from './feature.actions';
import { FeatureStateModel } from './feature.model';

export interface MediumPost {
  title: string;
  thumbnail: string;
  link: string;
  pubDate: string;
  categories: string[];
}

interface MediumResponse {
  items: MediumPost[];
}

@ngxsState<FeatureStateModel>({
  name: 'feature',
  defaults: {
    features: undefined,
    activeFeature: 'Personal profile'
  }
})
export class FeatureState {

  constructor(
    private httpClient: HttpClient
  ) { }

  @Selector()
  public static getFeatures({ features }: FeatureStateModel) {
    return features;
  }

  @Selector()
  public static getActiveFeature({ features, activeFeature }: FeatureStateModel) {
    return features.find(feature => feature.title === activeFeature);
  }

  @Selector()
  public static menuItems({ features }: FeatureStateModel) {
    return features.map(feature => feature.title);
  }

  @Action(Actions.ReadFeatures)
  public deleteUser({ patchState }: StateContext<FeatureStateModel>) {
    this.httpClient
      .get<MediumResponse>(
        'https://api.rss2json.com/v1/api.json',
        { params: { rss_url: 'https://medium.com/feed/@alvino.aj' } }
      )
      .pipe(
        map(res => res.items)
      )
      .subscribe(features => patchState({ features }));
  }

  @Action(Actions.SetActiveFeature)
  public setOpenFeaturez({ patchState }: StateContext<FeatureStateModel>, { activeFeature }: Actions.SetActiveFeature) {
    patchState({ activeFeature });
  }
}
