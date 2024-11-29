import {IOrderHistory} from "./interfaces";

export class OrderHistory implements IOrderHistory {
  private readonly _history: Array<unknown>;

  constructor() {
    this._history = [];
  }

  get history(): Array<unknown> {
    return this._history;
  }

  get isNextOrderMultipleOfThree(): boolean {
    return (this.history.length + 1) % 3 === 0;
  }

  get bonusPercentage(): number {
    return this.history.length;
  }

  public addToHistory(orderDetails: unknown): void {
    this._history.push(orderDetails);
  }
}
