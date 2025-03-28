import {EditingHistory, Invoice} from "./services";
import {INetworkLayer} from "./network";

export interface Builder {
  build(): INetworkLayer;

  createUserService(): Builder;

  createEditingService(history?: EditingHistory): Builder;

  createPaymentService(invoices?: Invoice[]): Builder;
}
