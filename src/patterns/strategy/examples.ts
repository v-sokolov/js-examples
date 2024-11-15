import { StrategyContext, FixedDiscount, PercentageDiscount } from './'

const RANDOM_FIXED_DISCOUNT = 500;
const RANDOM_PERCENTAGE_DISCOUNT = 15;
const RANDOM_PRICE = 1000;

const fixed = new FixedDiscount(RANDOM_FIXED_DISCOUNT);
const percentage = new PercentageDiscount(RANDOM_PERCENTAGE_DISCOUNT);

export const calculateFinalPrice = (price: number, strategy: FixedDiscount | PercentageDiscount): number => {
  const context = new StrategyContext(strategy);
  const result = context.calculateFinalPrice(price);
  console.log({strategyName: strategy.name,  price, result});
  return result;
};

calculateFinalPrice(RANDOM_PRICE, fixed);
calculateFinalPrice(RANDOM_PRICE, percentage);
