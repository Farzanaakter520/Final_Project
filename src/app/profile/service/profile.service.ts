import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiUrl = 'http://localhost:8081/api/users';

  constructor(private http: HttpClient) { }

  getUserInfo(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/me`);
  }

  changePassword(data: { currentPassword: string; newPassword: string }): Observable<any> {
    return this.http.put('http://localhost:8081/api/users/change-password', data);
  }

  editUserInfo(data: { name: string; phone: string }): Observable<any> {
    return this.http.put('http://localhost:8081/api/users/edit', data);
  }


}


export interface PasswordChangeRequest {
  currentPassword: string;
  newPassword: string;
}