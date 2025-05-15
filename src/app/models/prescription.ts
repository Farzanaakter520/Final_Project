export class Prescription {
  prescription_id: number;
  patientId: number;
  doctorId: number;
  description: string;
  prescription_date: Date;

  constructor() {
    this.prescription_id = 0;
    this.patientId = 0;
    this.doctorId = 0;
    this.description = "";
    this.prescription_date = new Date();
  }
}
