import {NetworkLayer} from "../network-layer/network-layer.impl";

export interface Builder {
  createUserService(): Builder;

  createEditingService(initOptions?: unknown): Builder;

  createPaymentService(initOptions?: unknown): Builder;
}

export interface INetworkServiceDirector {
  getWebNetworkService(): typeof NetworkLayer.prototype.service;

  getMobileNetworkService(): typeof NetworkLayer.prototype.service;

  getBackOfficeNetworkService(): typeof NetworkLayer.prototype.service;
}
