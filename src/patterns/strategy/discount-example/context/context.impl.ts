import {FixedDiscount, IDiscountStrategy} from "../strategies";
import {IStrategyContext} from "./interfaces";

export class StrategyContext implements IStrategyContext {
  private readonly _orderHistory: Array<unknown>;

  constructor() {
    // Initial default
    this._strategy = new FixedDiscount(0);
    this._orderHistory = [];
  }

  private _strategy: IDiscountStrategy;

  get strategy(): IDiscountStrategy {
    return this._strategy;
  }

  set strategy(strategy: IDiscountStrategy) {
    this._strategy = strategy;
  }

  get orderHistory(): Array<unknown> {
    return this._orderHistory;
  }

  set orderHistory(orderDetails: unknown) {
    this._orderHistory.push(orderDetails);
  }

  get isNextOrderMultipleOfThree(): boolean {
    return (this.orderHistory.length + 1) % 3 === 0;
  }

  get bonusPercentage(): number {
    return this.orderHistory.length;
  }

  calculateFinalPrice(price: number): number {
    this.orderHistory = price;

    return this._strategy.calculateDiscount(price);
  }
}
