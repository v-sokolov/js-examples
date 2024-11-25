import {IFixedDiscountStrategy} from "./interfaces";

export class FixedDiscount implements IFixedDiscountStrategy {
  public name = 'FixedDiscount';

  constructor(public amount: number) {}

  calculateDiscount(price: number): number {
    return price - this.amount;
  }
}
