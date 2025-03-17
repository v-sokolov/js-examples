import {
  Builder,
  EditingHistory,
  INetworkLayer,
  Invoice,
  WithEditingService,
  WithPaymentService,
  WithUserService,
} from '../contracts'
import {UserService} from "../services/user-service.impl";
import {EditingService} from "../services/editing-service.impl";
import {PaymentService} from "../services/payment-service.impl";

/**
 * @description However, *TypeScript* does not allow us to change the type of `this` dynamically.
 * @description Since we cannot modify the type of `this` directly, we must first typecast it at each step of the service creation before returning it.
 */
export class NetworkLayer<Added extends INetworkLayer> implements Builder<Added> {
  /**
   * @description The `networkLayer` forced to a typecast, because it starts as an empty object.
   * @description But it will gradually become a valid `Added` type as services are added.
   */
  private readonly networkLayer: Added = {} as Added;

  build(): Added {
    return this.networkLayer;
  }

  createUserService(): WithUserService<Added> {
    this.networkLayer.userService = new UserService();
    return this as WithUserService<Added>;
  }

  createEditingService(history: EditingHistory): WithEditingService<Added> {
    this.networkLayer.editingService = new EditingService(history);
    return this as WithEditingService<Added>;
  }

  createPaymentService(invoices: Invoice[]): WithPaymentService<Added> {
    this.networkLayer.paymentService = new PaymentService(invoices);
    return this as WithPaymentService<Added>;
  }
}
