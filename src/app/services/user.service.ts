import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  /**
   * Registers a new user.
   * @param registerRequest The registration data.
   * @returns An Observable containing the UserResponse on success, or an error on failure.
   */
  registerUser(registerRequest: RegisterRequest): Observable<UserResponse> {
    const url = `${this.baseUrl}/api/auth/register`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // Set content type

    return this.http.post<UserResponse>(url, registerRequest, { headers })
      .pipe(
        catchError(this.handleError) // Handle errors
      );
  }

  /**
   * Error handler for HTTP requests.
   * @param error The error object.
   * @returns An Observable that throws the error.
   */
  private handleError(error: any): Observable<any> {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.error?.message || 'Server error'}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage)); // Use throwError
  }



  private apiUrl = 'http://localhost:8081/api/users';


  // Get all users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getCurrentUser(): Observable<any> {

    const userId = Number(localStorage.getItem('id'));
    console.log(userId)
    return this.http.get<any>(`${this.apiUrl}/${userId}`);
  }


  // Create a new user
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  // Update a user
  fetchUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, user);
  }

  updateProfile(id: number, user: User): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, user);
  }



  // Delete a user
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getUserByRole(role: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/role`, {
      params: { role }
    });
  }

  getUserByRolePublic(role: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/public/role`, {
      params: { role }
    });
  }

  changePassword(data: { currentPassword: string; newPassword: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/change-password`, data);
  }

}

export interface RegisterRequest {
  email: string;
  password: string;
  role: string; //  Use string, or create an Enum/Type for Role if needed
  name?: string;
  phoneNumber?: string;
}

interface UserResponse {
  id: number;
  email: string;
  role: string;
  name?: string;
  phoneNumber?: string;
}


