export interface IFlyweightFactory<K, S, F> {
  flyweights: Map<K, F>;
  generateKey: (sharedState: S) => K;
  generateIntrinsicState: (sharedState: S) => F;

  getFlyweight(sharedState: S): F;
}
