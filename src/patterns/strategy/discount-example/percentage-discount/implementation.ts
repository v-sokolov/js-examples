import {IPercentageDiscountStrategy} from "./interfaces";

export class PercentageDiscount implements IPercentageDiscountStrategy {
  public name = 'PercentageDiscount';

  constructor(public percentage: number) {
  }

  calculateDiscount(price: number): number {
    return price - (price * this.percentage) / 100;
  }
}
