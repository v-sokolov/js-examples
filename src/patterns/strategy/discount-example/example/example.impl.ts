import {BonusDiscount, FixedDiscount, PercentageDiscount} from "../strategies";
import {StrategyContext} from "../context";
import {IOrder} from "./interfaces";

const DiscountContext = new StrategyContext();

export const clientApp = (price: number, order: IOrder): number => {
  switch (order.discountType) {
    case 'FixedDiscount':
      DiscountContext.strategy = new FixedDiscount(order.discount);
      break;
    case 'PercentageDiscount':
      DiscountContext.strategy = new PercentageDiscount(order.discount);
      break;
    case "BonusDiscount":
      DiscountContext.strategy = new BonusDiscount(
        DiscountContext.isNextOrderMultipleOfThree ? DiscountContext.bonusPercentage : 0
      );
      break;
    default:
      DiscountContext.strategy = new FixedDiscount(0);
      break;
  }

  const priceWithDiscount = DiscountContext.calculateFinalPrice(order.price);

  console.log({
    currentStrategy: DiscountContext.strategy.name,
    withoutDiscount: price,
    withDiscount: priceWithDiscount,
  });

  return priceWithDiscount;
};
