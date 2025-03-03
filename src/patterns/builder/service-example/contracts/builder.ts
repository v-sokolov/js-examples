import {INetworkLayer} from "./network";
import {EditingHistory, Invoice} from "./services";

export interface Builder {
  build(): INetworkLayer;

  createUserService(): Builder;

  createEditingService(history?: EditingHistory): Builder;

  createPaymentService(invoices?: Invoice[]): Builder;
}
