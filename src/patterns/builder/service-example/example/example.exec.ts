import {backOfficeNetworkService, mobileNetworkService, webNetworkService} from './example.impl'

const getErrorMessage = (serviceName: string) => `${serviceName} service is not available for this platform`;

console.log('Public WEB', {
  adminUser: webNetworkService.userService?.getUser('admin@gmail.com') ?? getErrorMessage('User'),
  editingHistory: webNetworkService.editingService?.getEditingHistory() ?? getErrorMessage('Editing'),
  invoices: mobileNetworkService.paymentService?.getInvoices() ?? getErrorMessage('Payment')
});

console.log('Mobile', {
  adminUser: mobileNetworkService.userService?.getUser('admin@gmail.com') ?? getErrorMessage('User'),
  editingHistory: mobileNetworkService.editingService?.getEditingHistory() ?? getErrorMessage('Editing'),
  invoices: mobileNetworkService.paymentService?.getInvoices() ?? getErrorMessage('Payment')
});

console.log('BackOffice WEB', {
  adminUser: backOfficeNetworkService.userService?.getUser('admin@gmail.com') ?? getErrorMessage('User'),
  editingHistory: backOfficeNetworkService.editingService?.getEditingHistory() ?? getErrorMessage('Editing'),
  invoices: backOfficeNetworkService.paymentService?.getInvoices() ?? getErrorMessage('Payment')
});
