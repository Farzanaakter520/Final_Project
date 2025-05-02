import { Routes } from '@angular/router';
import { PatientInformationComponent } from './patient-information/patient-information.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { Patient } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DepartmentComponent } from './department/department.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { ServicesComponent } from './services/services.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { LoginComponent } from './login/login.component';
import { LoginDoctorComponent } from './login-doctor/login-doctor.component';
import { LoginPatientsComponent } from './login-patients/login-patients.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterComponent } from './register/register.component';
import { PrescriptionMedicinesComponent } from './prescription-medicines/prescription-medicines.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { DetailsComponent } from './details/details.component';
import { AvailableDoctorComponent } from './available-doctor/available-doctor.component';
import { MedicineFormComponent } from './medicine-form/medicine-form.component';




export const routes: Routes = [
       {path: '', redirectTo: 'home', pathMatch: 'full'},
       {path:'add', component: PatientInformationComponent},
       {path:'list', component: PatientListComponent},
       {path:'home', component: HomeComponent},
       {path:'about', component: AboutComponent},
       {path:'departments', component: DepartmentComponent},
       {path:'doctors', component: DoctorsComponent},
       {path:'services', component: ServicesComponent},
       {path:'addAppointment', component: AppointmentFormComponent},
       {path:'appointmentList', component: AppointmentListComponent},
       {path:'admin', component: AdminComponent},
       {path:'contact', component: ContactComponent},
       {path:'pharmacy', component: PharmacyComponent},
       {path:'login', redirectTo: 'login/patients', pathMatch: 'full'},
       {path:'login/doctor', component: LoginDoctorComponent},
       {path:'login/patients', component: LoginPatientsComponent},
       {path:'login/admin', component: LoginAdminComponent},
       {path:'register', component: RegisterComponent},
       {path:'medicine', component: PharmacyComponent},
       {path:'prescription-medicines', component: PrescriptionMedicinesComponent},
       {path:'addDoctor', component: AddDoctorComponent},
       {path:'patient-dashboard', component: PatientDashboardComponent},
       {path:'doctor-dashboard', component: DoctorDashboardComponent},
       {path: 'details', component: DetailsComponent},
       {path:'availableDoctor', component: AvailableDoctorComponent},
       {path:'medicine-form', component: MedicineFormComponent},

       {path:'**', redirectTo: 'home', pathMatch: 'full'}
];
