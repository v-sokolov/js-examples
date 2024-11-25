import {IDiscountStrategy} from "./interfaces";

export class PercentageDiscount implements IDiscountStrategy {
  public name = 'PercentageDiscount';

  constructor(public percentage: number) {
  };

  calculateDiscount(price: number): number {
    return price - (price * this.percentage) / 100;
  }
}
