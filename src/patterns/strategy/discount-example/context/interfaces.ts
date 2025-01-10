export interface IStrategyContext {
  calculateFinalPrice(price: number): number;
}

export interface IOrderHistory {
  history: Array<unknown>;
  isNextOrderMultipleOfThree: boolean;
  bonusPercentage: number;
}
