import { Routes } from '@angular/router';
import { PatientInformationComponent } from './patient-information/patient-information.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DepartmentComponent } from './department/department.component';
import { ServicesComponent } from './services/services.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
// import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { ContactComponent } from './contact/contact.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { LoginComponent } from './login/login.component';


import { PrescriptionMedicinesComponent } from './prescription-medicines/prescription-medicines.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { DetailsComponent } from './details/details.component';
import { AvailableDoctorComponent } from './available-doctor/available-doctor.component';
import { MedicineFormComponent } from './medicine-form/medicine-form.component';

import { authGuard } from './core/auth.guard';

import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { ProfileComponent } from './profile/profile.component';
import { GeneratePrescriptionComponent } from './generate-prescription/generate-prescription.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PaymentComponent } from './payment/payment.component';
import { InventoryComponent } from './invoice/inventory/inventory.component';
import { AddMedicineComponent } from './invoice/add-medicine/add-medicine.component';
import { InvoiceComponent } from './invoice/invoice/invoice.component';
import { InvoiceHistoryComponent } from './invoice/invoice-history/invoice-history.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import { EditComponent } from './profile/edit/edit.component';
import { AppointmentsComponent } from './doctor-dashboard/appointments/appointments.component';
// import { DoctorComponent } from './doctor/doctor.component';




export const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: 'add', component: PatientInformationComponent },
   { path: 'list', component: PatientListComponent },
   { path: 'home', component: HomeComponent },
   { path: 'about', component: AboutComponent },
   { path: 'departments', component: DepartmentComponent },
   //    {path:'doctors', component: DoctorsComponent},
   { path: 'services', component: ServicesComponent },
   { path: 'addAppointment', component: AppointmentFormComponent },
   // { path: 'appointmentList', component: AppointmentListComponent },
   { path: 'admin', component: SidebarComponent },
   { path: 'contact', component: ContactComponent },
   { path: 'pharmacy', component: PharmacyComponent },
   { path: 'login', component: LoginComponent },


   { path: 'medicine', component: PharmacyComponent },
   { path: 'prescription-medicines', component: PrescriptionMedicinesComponent },
   { path: 'addDoctor', component: AddDoctorComponent },
   { path: 'patient-dashboard', component: PatientDashboardComponent },
   { path: 'doctor-dashboard', component: DoctorDashboardComponent },
   { path: 'details', component: DetailsComponent },
   { path: 'availableDoctor', component: AvailableDoctorComponent },
   { path: 'medicine-form', component: MedicineFormComponent },
   { path: 'register', component: RegistrationComponent },
   { path: 'user-list', component: UserListComponent },
   { path: 'add-user', component: AddUserComponent },
   // { path: 'doctor-card', component: DoctorComponent },
   { path: 'generate-prescription', component: GeneratePrescriptionComponent },
   { path: 'profile', component: ProfileComponent },
   { path: 'payment', component: PaymentComponent },
   { path: 'inventory', component: InventoryComponent },
   { path: 'addMedicine', component: AddMedicineComponent },
   { path: 'invoice', component: InvoiceComponent },
   { path: 'invoice-history', component: InvoiceHistoryComponent },
   { path: 'edit', component: EditComponent },
   { path: 'changePassword', component: ChangePasswordComponent },
   { path: 'appointmentList', component: AppointmentsComponent },

   { path: '', component: NavbarComponent, canActivate: [authGuard], }


];
