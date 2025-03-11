import { Injectable } from '@angular/core';
import { Student } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  constructor() { }

  

  register(
    user: Student = new Student(0,'','','','','','','')
  ): boolean {
      let users = JSON.parse(localStorage.getItem('students') || '[]');

      if (users.some((u: any) => u.email === user.email)) {
        return false; 
      }

      const newUser = {
        id: user.id,  // Ensure it's stored as a number
        name: user.name,
        fatherName: user.fatherName,
        motherName: user.motherName,
        address: user.address,
        mobile: user.mobileNo,
        email: user.email,
        password: user.password
      };

      users.push(newUser);
      localStorage.setItem('students', JSON.stringify(users));
      return true;
  }




  login(
    userEmail: string,
    userPassword: string
  ): boolean {
    let users = JSON.parse(localStorage.getItem('students') || '[]');

    const user = users.find((u: any) => u.email === userEmail && u.password === userPassword);

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      return true;
    }

    return false;
  }
  
}
