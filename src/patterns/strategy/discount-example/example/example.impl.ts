import {BonusDiscount, FixedDiscount, PercentageDiscount} from "../strategies";
import {StrategyContext} from "../context";
import {IOrder} from "./interfaces";

const DiscountContext = new StrategyContext();

export const clientApp = (order: IOrder): number => {
  let {discountType, price, discount} = order;

  switch (discountType) {
    case 'FixedDiscount':
      DiscountContext.strategy = new FixedDiscount(discount);
      break;
    case 'PercentageDiscount':
      DiscountContext.strategy = new PercentageDiscount(discount);
      break;
    case "BonusDiscount":
      DiscountContext.strategy = new BonusDiscount(
        DiscountContext.isNextOrderMultipleOfThree ? DiscountContext.bonusPercentage : 0
      );
      break;
    default:
      console.log('Unknown discount type. Using default strategy with 0 discount');
      discount = 0;
      DiscountContext.strategy = new FixedDiscount(discount);
      break;
  }

  const priceWithDiscount = DiscountContext.calculateFinalPrice(price);

  console.log({
    currentStrategy: DiscountContext.strategy.name,
    discount: discount,
    beforeDiscount: price,
    afterDiscount: priceWithDiscount,
  });

  return priceWithDiscount;
};
