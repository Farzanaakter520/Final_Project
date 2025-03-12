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



export const routes: Routes = [
       {path: '', component: PatientInformationComponent},
       {path:'add', component: PatientInformationComponent},
       {path:'list', component: PatientListComponent},
       {path:'home', component: HomeComponent},
       {path:'about', component: AboutComponent},
       {path:'departments', component: DepartmentComponent},
       {path:'doctors', component: DoctorsComponent},
       {path:'services', component: ServicesComponent},
       {path:'appointment', component: AppointmentFormComponent},
       {path:'addAppointment', component: AppointmentListComponent},
       {path:'admin', component: AdminComponent},
       {path:'contact', component: ContactComponent},
       
       
       
       
       {path:'**', redirectTo: ''},
];
