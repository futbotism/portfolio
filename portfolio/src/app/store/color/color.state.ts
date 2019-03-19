import { Action, Selector, State as ngxsState, StateContext, Store } from '@ngxs/store';
import randomColor from 'randomcolor';

import * as Actions from './color.actions';
import { ColorStateModel } from './color.model';
import { timer } from 'rxjs';
import { filter } from 'rxjs/operators';

@ngxsState<ColorStateModel>({
  name: 'color',
  defaults: {
    accent: undefined,
    primary: undefined,
    text: undefined,
    paused: false
  }
})
export class ColorState {

  constructor(
    private store: Store
  ) {
    timer(1000, 15000)
    .pipe(
      filter(() => !this.store.selectSnapshot(ColorState.isPaused))
    )
    .subscribe(() => {
      setTimeout(() => this.store.dispatch(new Actions.GenerateColors), 500);
      this.store.dispatch(new Actions.GenerateColors);
    });
  }

  @Selector()
  public static isPaused({ paused }: ColorStateModel) {
    return paused;
  }

  @Selector()
  public static getColors({ accent, primary, text }: ColorStateModel) {
    return { accent, primary, text };
  }

  @Action(Actions.PauseColors)
  public pauseColors({ patchState, getState }: StateContext<ColorStateModel>) {
    const paused = !getState().paused;

    patchState({
      paused
    });
  }

  @Action(Actions.GenerateColors)
  public generateColors({ patchState, getState }: StateContext<ColorStateModel>) {

    const contrastA = Math.floor(Math.random() * 2) + 1 === 1 ? 'dark' : 'light';
    const contrastB = contrastA === 'dark' ? 'light' : 'dark';
    const scheme = complimentarySchemes[Math.floor(Math.random() * complimentarySchemes.length)];


    const accent = randomColor({
      luminosity: 'bright',
      hue: scheme.a
    });

    const primary = randomColor({
      luminosity: contrastB,
      hue: scheme.b
    });

    const text = randomColor({
      luminosity: contrastA,
      hue: 'monochrome'
    });

    patchState({ accent, primary, text });
  }
}

const complimentarySchemes = [
  { a: 'green', b: 'red' },
  { a: 'yellow', b: 'purple' },
  { a: 'yellow', b: 'blue' },
  { a: 'blue', b: 'orange' },
  { a: 'orange', b: 'blue' },
  { a: 'purple', b: 'yellow' },
  { a: 'red', b: 'green' },
  { a: 'blue', b: 'green' },
  { a: 'blue', b: 'yellow' },
];
