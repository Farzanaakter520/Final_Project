import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prescription } from '../models/prescription';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {
  private apiUrl = 'http://localhost:8081/api/prescriptions';

  constructor(private http: HttpClient) {}

  createPrescription(prescription: Prescription): Observable<Prescription> {
    return this.http.post<Prescription>(this.apiUrl, prescription);
  }
}
