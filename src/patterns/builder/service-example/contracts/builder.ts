import {EditingHistory, IEditingService, Invoice, IPaymentService, IUserService} from "./services";
import {INetworkLayer} from "./network";

type WithService<T, K extends keyof INetworkLayer, V> = Builder<T & { [P in K]: V }>;

export type WithUserService<Added> = WithService<Added, "userService", IUserService>;

export type WithEditingService<Added> = WithService<Added, "editingService", IEditingService>;

export type WithPaymentService<Added> = WithService<Added, "paymentService", IPaymentService>;

export interface Builder<Added extends INetworkLayer = {}> {
  build(): Added;

  createUserService(): WithUserService<Added>;

  createEditingService(history: EditingHistory): WithEditingService<Added>;

  createPaymentService(invoices: Invoice[]): WithPaymentService<Added>;
}
