import {Builder, EditingHistory, INetworkLayer, Invoice} from '../contracts'
import {UserService} from "../services/user-service.impl";
import {EditingService} from "../services/editing-service.impl";
import {PaymentService} from "../services/payment-service.impl";

export class NetworkLayer implements Builder {
  private readonly networkLayer: INetworkLayer = {};

  build(): INetworkLayer {
    return this.networkLayer
  }

  createUserService(): Builder {
    this.networkLayer.userService = new UserService();
    return this;
  }

  createEditingService(history: EditingHistory): Builder {
    this.networkLayer.editingService = new EditingService(history);
    return this;
  }

  createPaymentService(invoices: Invoice[]): Builder {
    this.networkLayer.paymentService = new PaymentService(invoices);
    return this;
  }
}
