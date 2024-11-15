export interface IBaseDiscountStrategy {
  name: string;
  calculateDiscount(price: number): number;
}

export interface IFixedDiscountStrategy extends IBaseDiscountStrategy {
  amount: number;
}

export interface IPercentageDiscountStrategy extends IBaseDiscountStrategy {
  percentage: number;
}

export interface IStrategyContext {

  calculateFinalPrice(price: number): number;
}
