import {clientApp} from "./example.impl";

const RANDOM_PRICE = 1000;

// Calculating a final price using a fixed amount discount
clientApp({
  price: RANDOM_PRICE,
  discount: 350,
  discountType: 'FixedDiscount',
});

// Calculating a final price using a percentage discount
clientApp({
  price: RANDOM_PRICE,
  discount: 15,
  discountType: 'PercentageDiscount',
});

// Calculating a final price using a bonus discount
clientApp({
  price: RANDOM_PRICE,
  discount: 0,
  discountType: 'BonusDiscount',
});

clientApp({
  price: RANDOM_PRICE,
  discount: 1000000,
  // @ts-expect-error
  discountType: 'non-existent discount strategy',
});

// Calculating a final price using a bonus discount
clientApp({
  price: RANDOM_PRICE,
  discount: 0,
  discountType: 'BonusDiscount',
});

// Calculating a final price using a bonus discount
clientApp({
  price: RANDOM_PRICE,
  discount: 0,
  discountType: 'BonusDiscount',
});
