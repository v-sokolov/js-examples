import {IDiscountStrategy} from "./interfaces";

export class BonusDiscount implements IDiscountStrategy {
  public name = 'BonusDiscount';

  constructor(public bonus: number) {
  };

// Every 3rd order gets a discount based on: dynamic percentage plus fixed amount, both equal to history length.
// Non-multiple of 3 orders get the original price.
  calculateDiscount(price: number): number {
    return price - ((price * this.bonus) / 100) - this.bonus;

  }
}
