import {IDiscountStrategy} from "./interfaces";

export class FixedDiscount implements IDiscountStrategy {
  public name = 'FixedDiscount';

  constructor(public amount: number) {
  };

  calculateDiscount(price: number): number {
    return this.amount > 0 ? price - this.amount : price;
  }
}
