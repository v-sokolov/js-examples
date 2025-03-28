import {Invoice, IPaymentService} from "../contracts";

export class PaymentService implements IPaymentService {
  private readonly invoices: Invoice[] = [];

  constructor(invoices: Invoice[]) {
    invoices.forEach(invoice => this.invoices.push(invoice));
  }

  getInvoices(): Invoice[] {
    return this.invoices;
  }
}
