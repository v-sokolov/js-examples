interface Invoice {
  title: string;
  amount: number;
  currency: string;
}

interface IPaymentService {
  getInvoices(): Invoice[];
}

export class PaymentService implements IPaymentService {
  private readonly invoices: Invoice[] = [];

  constructor(invoices: Invoice[]) {
    invoices.forEach(invoice => this.invoices.push(invoice));
  }

  getInvoices(): Invoice[] {
    return this.invoices;
  }
}
