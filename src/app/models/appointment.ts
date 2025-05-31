 export class Appointment {
  id: number;
  patientId: number;
  doctorId: number;
  scheduledTime: string;

  constructor() {
    this.id = 0;
    this.patientId = 0;
    this.doctorId = 0;
    this.scheduledTime = "";
  }
}
