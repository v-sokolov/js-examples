import {IFlyweightFactory} from "./";
import {Flyweight} from "../flyweight/";

export class FlyweightFactory<K, S, F> implements IFlyweightFactory<K, S, F> {
  flyweights: Map<K, F> = new Map<K, F>();
  generateKey: (sharedState: S) => K;
  generateIntrinsicState: (sharedState: S) => F;

  constructor(props: Pick<IFlyweightFactory<K, S, F>, 'generateKey' | 'generateIntrinsicState'>) {
    this.generateKey = props.generateKey;
    this.generateIntrinsicState = props.generateIntrinsicState;
  }

  getFlyweight(sharedState: S): F {
    const key = this.generateKey(sharedState);

    if (!this.flyweights.has(key)) {
      const newFlyweight = new Flyweight<F>(this.generateIntrinsicState(sharedState)).sharedState as F;

      this.flyweights.set(key, newFlyweight);
    }

    return this.flyweights.get(key) as F;
  }

  getFlyweights() {
    return this.flyweights;
  }
}
