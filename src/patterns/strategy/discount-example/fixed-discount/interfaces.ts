import {IDiscountStrategy} from "../context/interfaces";

export interface IFixedDiscountStrategy extends IDiscountStrategy {
  amount: number;
}
