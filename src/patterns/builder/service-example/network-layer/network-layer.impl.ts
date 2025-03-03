import {Builder} from '../example/interfaces';
import {EditingService, PaymentService, UserService} from '../services';

type INetworkLayer = Partial<{
  userService: typeof UserService.prototype;
  editingService: typeof EditingService.prototype;
  paymentService: typeof PaymentService.prototype;
}>;

export class NetworkLayer implements Builder {
  private readonly networkLayer: INetworkLayer = {};

  get service(): INetworkLayer {
    return this.networkLayer;
  }

  createUserService(): NetworkLayer {
    this.networkLayer.userService = new UserService();
    return this;
  }

  createEditingService(history: ReturnType<typeof EditingService.prototype.getEditingHistory>): NetworkLayer {
    this.networkLayer.editingService = new EditingService(history);
    return this;
  }

  createPaymentService(invoices: ReturnType<typeof PaymentService.prototype.getInvoices>): NetworkLayer {
    this.networkLayer.paymentService = new PaymentService(invoices);
    return this;
  }
}
