import {IBaseDiscountStrategy, IStrategyContext} from "./interfaces";

export class StrategyContext implements IStrategyContext{
  private strategy: IBaseDiscountStrategy;

  constructor(strategy: IBaseDiscountStrategy) {
    this.strategy = strategy;
  }

  calculateFinalPrice(price: number): number {
    return this.strategy.calculateDiscount(price);
  }
}
