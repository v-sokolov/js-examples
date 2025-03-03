import {IEditingService, IPaymentService, IUserService} from "./services";

export type INetworkLayer = Partial<{
  userService: IUserService;
  editingService: IEditingService;
  paymentService: IPaymentService;
}>;

export interface INetworkServiceDirector {
  getWebNetworkService(): INetworkLayer;

  getMobileNetworkService(): INetworkLayer;

  getBackOfficeNetworkService(): INetworkLayer;
}
