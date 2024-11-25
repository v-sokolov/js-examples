import {IDiscountStrategy} from "../context/interfaces";

export interface IPercentageDiscountStrategy extends IDiscountStrategy {
  percentage: number;
}
