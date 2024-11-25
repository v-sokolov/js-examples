import {IDiscountStrategy} from "./interfaces";

export class BonusDiscount implements IDiscountStrategy {
  public name = 'BonusDiscount';

  constructor(public bonus: number) {
  };

  calculateDiscount(price: number): number {
    return price - ((price * this.bonus) / 100) - this.bonus;

  }
}
