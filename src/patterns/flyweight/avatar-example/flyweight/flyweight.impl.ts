import {IFlyweight} from "./";

export class Flyweight<F> implements IFlyweight<F> {
  sharedState: F;
  uniqueState: Record<string, unknown> = {};

  constructor(intrinsicState: F) {
    this.sharedState = intrinsicState;
    /*This is a very basic example of the unique state.*/
    this.uniqueState.createdAt = new Date();
  }

  getState() {
    return {
      ...this.sharedState,
      ...this.uniqueState,
    };
  }
}
