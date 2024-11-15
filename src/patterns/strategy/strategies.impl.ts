import {IFixedDiscountStrategy, IPercentageDiscountStrategy} from './interfaces';

export class FixedDiscount implements IFixedDiscountStrategy {
  public name = 'FixedDiscount';

  constructor(public amount: number) {}

  calculateDiscount(price: number): number {
    return price - this.amount;
  }
}

export class PercentageDiscount implements IPercentageDiscountStrategy {
  public name = 'PercentageDiscount';

  constructor(public percentage: number) {}

  calculateDiscount(price: number): number {
    return price - (price * this.percentage) / 100;
  }
}
