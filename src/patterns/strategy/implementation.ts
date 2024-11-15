import {BaseDiscountStrategy} from './interfaces';

export class DiscountManager implements BaseDiscountStrategy {
  type: unknown;
  constructor(type: unknown) {
    this.type = type;
  }

  calculateDiscount(price: number): number {
    switch (this.type) {
      case 'percentage':
        return price * 0.2;
      case 'fixed':
        return 20;
      default:
        return 0;
    }
  }
}
