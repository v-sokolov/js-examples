export interface BaseDiscountStrategy {
  calculateDiscount(price: number): number;
  type: unknown;
}
