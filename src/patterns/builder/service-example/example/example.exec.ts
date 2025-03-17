import {backOfficeNetworkService, mobileNetworkService, webNetworkService} from './example.impl'

const getErrorMessage = (serviceName: string) => `${serviceName} service is not available for this platform`;
const UserServiceError = getErrorMessage('User');
const EditingServiceError = getErrorMessage('Editing');
const PaymentServiceError = getErrorMessage('Payment');

console.log('Public WEB', {
  adminUser: webNetworkService.userService?.getUser('admin@gmail.com') ?? UserServiceError,
  editingHistory: webNetworkService.editingService.getEditingHistory(),
  invoices: mobileNetworkService.paymentService.getInvoices(),
});

console.log('Mobile', {
  adminUser: mobileNetworkService.userService?.getUser('admin@gmail.com') ?? UserServiceError,
  editingHistory: mobileNetworkService.editingService.getEditingHistory(),
  invoices: mobileNetworkService.paymentService.getInvoices(),
});

console.log('BackOffice WEB', {
  adminUser: backOfficeNetworkService.userService.getUser('admin@gmail.com'),
  editingHistory: backOfficeNetworkService.editingService?.getEditingHistory() ?? EditingServiceError,
  invoices: backOfficeNetworkService.paymentService?.getInvoices() ?? PaymentServiceError
});
