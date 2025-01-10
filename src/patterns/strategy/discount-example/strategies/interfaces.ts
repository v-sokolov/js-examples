export interface IDiscountStrategy {
  name: string;
  calculateDiscount(price: number): number;
}
