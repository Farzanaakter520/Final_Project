export class Payment {
  appointmentID: number;
  amount: number;
  paymentMethod: string;
  status: 'PAID' | 'UNPAID';
  paidAt: string;  // ISO 8601 date string (e.g., '2025-05-18T10:00:00Z')

  constructor(appointmentID: number, amount: number, paymentMethod: string, status: 'PAID' | 'UNPAID', paidAt: string) {
    this.appointmentID = appointmentID;
    this.amount = amount;
    this.paymentMethod = paymentMethod;
    this.status = status;
    this.paidAt = paidAt;
  }

}