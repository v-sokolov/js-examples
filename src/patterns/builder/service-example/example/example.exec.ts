import {backOfficeNetworkService, mobileNetworkService, webNetworkService} from './example.impl'

console.log('Public WEB', {
  // 'TS2339: Property userService does not exist on type { editingService: EditingService; } & { paymentService: PaymentService; }',
  // adminUser: webNetworkService.userService.getUser('admin@gmail.com'),
  editingHistory: webNetworkService.editingService.getEditingHistory(),
  invoices: mobileNetworkService.paymentService.getInvoices(),
});

console.log('Mobile', {
  // 'TS2339: Property userService does not exist on type { editingService: EditingService; } & { paymentService: PaymentService; }',
  // adminUser: webNetworkService.userService.getUser('admin@gmail.com'),
  editingHistory: mobileNetworkService.editingService.getEditingHistory(),
  invoices: mobileNetworkService.paymentService.getInvoices(),
});

console.log('BackOffice WEB', {
  adminUser: backOfficeNetworkService.userService.getUser('admin@gmail.com'),
  // 'TS2339: Property editingService does not exist on type { userService: UserService; }',
  // editingHistory: backOfficeNetworkService.editingService?.getEditingHistory(),
  // 'TS2339: Property paymentService does not exist on type { userService: UserService; }',
  // invoices: backOfficeNetworkService.paymentService?.getInvoices(),
});
