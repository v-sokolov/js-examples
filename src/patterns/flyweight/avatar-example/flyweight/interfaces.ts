export interface IFlyweight<F> {
  sharedState: F;
  uniqueState: Record<string, unknown>;

  getState(): IFlyweight<F>['sharedState'] & IFlyweight<F>['uniqueState'];
}
