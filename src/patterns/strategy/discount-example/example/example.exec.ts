import {clientApp} from "./example.impl";

const RANDOM_PRICE = 1000;

// Calculating a final price using a fixed amount discount
clientApp(RANDOM_PRICE, {
  price: RANDOM_PRICE,
  discount: 350,
  discountType: 'FixedDiscount',
});

// Calculating a final price using a percentage discount
clientApp(RANDOM_PRICE, {
  price: RANDOM_PRICE,
  discount: 15,
  discountType: 'PercentageDiscount',
});

// Calculating a final price using a bonus discount
// Every 3rd order gets a discount based on: dynamic percentage plus fixed amount - both equal to history length.
// Non-multiple of 3 orders get the original price.
clientApp(RANDOM_PRICE, {
  price: RANDOM_PRICE,
  discount: 0,
  discountType: 'BonusDiscount',
});

clientApp(RANDOM_PRICE, {
  price: RANDOM_PRICE,
  discount: 1000000,
  // @ts-expect-error
  discountType: 'non-existent discount strategy',
});

// Calculating a final price using a bonus discount
clientApp(RANDOM_PRICE, {
  price: RANDOM_PRICE,
  discount: 0,
  discountType: 'BonusDiscount',
});
