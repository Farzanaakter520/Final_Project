import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Medicine } from '../models/medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  private apiUrl = 'http://localhost:8081/api/medicines';

  constructor(private http: HttpClient) {}

  getMedicine(): Observable<Medicine[]> {
    return this.http.get<Medicine[]>(this.apiUrl);
  }

  addMedicine(medicine: Medicine): Observable<Medicine> {
    return this.http.post<Medicine>(this.apiUrl, medicine, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  updateMedicine(id: number, medicine: Medicine): Observable<Medicine> {
    return this.http.put<Medicine>(`${this.apiUrl}/${id}`, medicine, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  deleteMedicine(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

         