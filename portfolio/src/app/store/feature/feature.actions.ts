export class ReadFeatures {
  public static readonly type = '[Features] Read features';
  constructor() { }
}

export class SetActiveFeature {
  public static readonly type = '[Features] Read features';
  constructor(public activeFeature: string) { }
}
