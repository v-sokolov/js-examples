import {FixedDiscount, IDiscountStrategy} from "../strategies";
import {IStrategyContext} from "./interfaces";
import {OrderHistory} from "./order-history.impl";

export class StrategyContext implements IStrategyContext {
  private _orderHistory: OrderHistory;

  constructor() {
    // Initial default
    this._strategy = new FixedDiscount(0);
    this._orderHistory = new OrderHistory();
  }

  private _strategy: IDiscountStrategy;

  get strategy(): IDiscountStrategy {
    return this._strategy;
  }

  set strategy(strategy: IDiscountStrategy) {
    this._strategy = strategy;
  }

  calculateFinalPrice(price: number): number {
    this._orderHistory.addToHistory(price);

    return this._strategy.calculateDiscount(price);
  }
}
