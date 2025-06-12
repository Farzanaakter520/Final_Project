import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Payment {
  appointmentID: number;
  amount: number;
  paymentMethod: string;
  status: string;
  paidAt: string; // ISO 8601 format
}
@Injectable({
  providedIn: 'root'
})
export class PaymentService {
private apiUrl = 'http://localhost:8081/api/payments';  // Your Spring Boot API URL

  constructor(private http: HttpClient) { }

  // Create payment
  createPayment(payment: Payment): Observable<Payment> {
    return this.http.post<Payment>(this.apiUrl, payment);
  }

  // Get all payments
  getAllPayments(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.apiUrl);
  }

  // Get payment by ID
  getPaymentById(id: number): Observable<Payment> {
    return this.http.get<Payment>(`${this.apiUrl}/${id}`);
  }

  // Get payment by appointment ID
  getPaymentByAppointmentId(appointmentId: number): Observable<Payment> {
    return this.http.get<Payment>(`${this.apiUrl}/appointment/${appointmentId}`);
  }

  // Delete payment by ID
  deletePayment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}