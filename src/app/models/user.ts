export enum Role {
  Admin = 'ADMIN',
  Doctor = 'DOCTOR',
  Patient = 'PATIENT',
}

export class User {
  id: number;
  name: string;
  age: number;
  gender: string;
  dob: string;
  address: string;
  phoneNumber: string;
  speciality: string;
  bloodGroup: string;
  email: string;
  avatarUrl:string;
  password: string;
  role:Role;
  // avatarUrl?: string; // URL of the uploaded image
  // avatarFile?: File; // File object for uploading


  constructor() {
      this.id = 0;
      this.name = "";
      this.age = 0;
      this.gender = "";
      this.address = "";
      this.dob = "";
      this.phoneNumber = "";
      this.speciality = "";

      this.email = "";
      this.avatarUrl = "";
      this.password = "";
      this.role= Role.Admin;
      this.bloodGroup = "";
  }

}

export interface GetUserInfo{
  id: number;
  name: string;
  age: number;
  gender: string;
  dob: string;
  address: string;
  phoneNumber: string;
  speciality: string;
  email: string;
  avatarUrl:string;
  password: string;
  role:Role;
}

export interface Doctor {
  id: number;
  email: string;
  role: string;
  name: string;
  phoneNumber: string;
  dob: string | null;
  age: number | null;
  gender: string | null;
  speciality: string;
  bloodGroup: string | null;
  avatarUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Patient {
  id: number;
  email: string;
  role: string;
  name: string;
  phoneNumber: string;
  dob: string | null;
  age: number | null;
  gender: string | null;
  speciality: string | null;
  bloodGroup: string | null;
  avatarUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface PrescriptionReceived {
  prescriptionId: number;
  doctor: Doctor;
  patient: Patient;
  medicines: string;
  patientName: string;
  tests: string;
  advice: string;
  prescriptionDate: string;
}
