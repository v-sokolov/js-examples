import {FixedDiscount} from "./fixed-discount/implementation";
import {PercentageDiscount} from "./percentage-discount/implementation";
import {IDiscountStrategy} from "./context/interfaces";
import {StrategyContext} from "./context/implementation";

const RANDOM_FIXED_DISCOUNT = 500;
const RANDOM_PERCENTAGE_DISCOUNT = 15;
const RANDOM_PRICE = 1000;

const DiscountContext = new StrategyContext();

export const calculateFinalPrice = (price: number, strategy: IDiscountStrategy): number => {
  DiscountContext.strategy = strategy;

  console.log({currentStrategy: DiscountContext.strategy.name });

  const resultWithDiscount = DiscountContext.calculateFinalPrice(price);

  console.log({price, result: resultWithDiscount});

  return resultWithDiscount;
};

// Calculating a final price using a fixed amount discount
calculateFinalPrice(RANDOM_PRICE, new FixedDiscount(RANDOM_FIXED_DISCOUNT));

// Calculating a final price using a percentage discount
calculateFinalPrice(RANDOM_PRICE, new PercentageDiscount(RANDOM_PERCENTAGE_DISCOUNT));
