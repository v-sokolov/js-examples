import {Builder, EditingHistory, INetworkLayer, Invoice,} from '../contracts'
import {UserService} from "../services/user-service.impl";
import {EditingService} from "../services/editing-service.impl";
import {PaymentService} from "../services/payment-service.impl";

export class NetworkLayer<Added extends INetworkLayer> implements Builder {
  constructor(protected networkLayer: Added = {} as Added) {
  }

  static from<S extends INetworkLayer>(services: S): NetworkLayer<S> {
    return new NetworkLayer(services);
  }

  build() {
    return this.networkLayer;
  }

  createUserService() {
    return NetworkLayer.from<Added & { userService: UserService }>
    ({
      ...this.networkLayer,
      userService: new UserService(),
    });
  }

  createEditingService(history: EditingHistory) {
    return NetworkLayer.from<Added & { editingService: EditingService }>
    ({
      ...this.networkLayer,
      editingService: new EditingService(history),
    });

  }

  createPaymentService(invoices: Invoice[]) {
    return NetworkLayer.from<Added & { paymentService: PaymentService }>
    ({
      ...this.networkLayer,
      paymentService: new PaymentService(invoices),
    });

  }
}
