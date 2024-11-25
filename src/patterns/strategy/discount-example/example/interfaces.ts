export interface IOrder {
  price: number;
  discount: number;
  discountType: 'FixedDiscount' | 'PercentageDiscount' | 'BonusDiscount';
}
