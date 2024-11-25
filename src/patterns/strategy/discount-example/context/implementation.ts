import {IDiscountStrategy, IStrategyContext} from "./interfaces";
import {FixedDiscount} from "../fixed-discount/implementation";

export class StrategyContext implements IStrategyContext{
  private _strategy: IDiscountStrategy;

  constructor() {
    // Initial default
    this._strategy = new FixedDiscount(0);
  }

  get strategy(): IDiscountStrategy {
    return this._strategy;
  }

  set strategy(strategy: IDiscountStrategy) {
    this._strategy = strategy;
  }


  calculateFinalPrice(price: number): number {
    return this._strategy.calculateDiscount(price);
  }
}
