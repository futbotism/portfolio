import { MediumPost } from './feature.state';

export interface Group {
  points?: string;
  title?: string;
  meta?: string;
}

export interface Feature {
  title: string;
  intro?: string;
  group?: Group;
}

export interface FeatureStateModel {
  features: MediumPost[];
  activeFeature: string;
}
