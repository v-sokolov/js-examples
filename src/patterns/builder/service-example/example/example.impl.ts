import {NetworkLayer} from '../network-layer/network-layer.impl';
import {INetworkServiceDirector} from "../contracts";

class NetworkServiceDirector implements INetworkServiceDirector {
  getWebNetworkService() {
    const initEditingHistory = [
      {name: 'web init'},
      {name: 'updating defaults', options: {}},
      {name: 'web ready status'}
    ];
    const initInvoices = [{title: 'Bank Invoice', amount: 100, currency: 'EUR'}];

    return new NetworkLayer({})
      .createEditingService(initEditingHistory)
      .createPaymentService(initInvoices)
      .build();
  }

  getMobileNetworkService() {
    const initEditingHistory = [{name: 'mobile init'}, {name: 'mobile ready status'}];
    const initInvoices = [{title: 'ApplePay Invoice', amount: 50, currency: 'USD'}];

    return new NetworkLayer({})
      .createEditingService(initEditingHistory)
      .createPaymentService(initInvoices)
      .build();
  }

  getBackOfficeNetworkService() {
    return new NetworkLayer()
      .createUserService()
      .build();
  }
}

const networkServiceDirector = new NetworkServiceDirector();

export const webNetworkService = networkServiceDirector.getWebNetworkService();
export const mobileNetworkService = networkServiceDirector.getMobileNetworkService();
export const backOfficeNetworkService = networkServiceDirector.getBackOfficeNetworkService();
