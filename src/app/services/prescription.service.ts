import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prescription } from '../models/prescription';
import { PrescriptionReceived } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {
  private apiUrl = 'http://localhost:8081/api/prescriptions';

  constructor(private http: HttpClient) {}

  // // POST to /create
  // createPrescription(prescription: Prescription): Observable<Prescription> {
  //   return this.http.post<Prescription>(`${this.apiUrl}/create`, prescription);
  // }

  // // Optional: GET all prescriptions
  getAllPrescriptions(): Observable<Prescription[]> {
    return this.http.get<Prescription[]>(this.apiUrl);
  }

  // Optional: GET by ID
  getPrescriptionById(id: number): Observable<Prescription[]> {
    return this.http.get<Prescription[]>(`${this.apiUrl}/${id}`);
  }

  // Optional: UPDATE
  updatePrescription(id: number, updated: Prescription): Observable<Prescription> {
    return this.http.put<Prescription>(`${this.apiUrl}/${id}`, updated);
  }



  createPrescription(prescription: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, prescription);
  }

  deletePrescription(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
