export interface IDiscountStrategy {
  name: string;
  calculateDiscount(price: number): number;
}

export interface IStrategyContext {
  calculateFinalPrice(price: number): number;
}
