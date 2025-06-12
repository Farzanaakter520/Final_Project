export class Prescription {
  prescriptionId: number;
  doctor_id: number;
  patient_id: number;
  patientName: string;
  medicines: string;
  tests: string;
  advice: string;
  prescriptionDate: string;
  
  constructor(
    prescriptionId = 0,
    doctorId = 0,
    patientId = 0,
    patientName = "",
    medicines = "",
    tests = "",
    advice = "",
    prescriptionDate = ""
  ) {
    this.prescriptionId = prescriptionId;
    this.doctor_id = doctorId;
    this.patient_id = patientId;
    this.patientName = patientName;
    this.medicines = medicines;
    this.tests = tests;
    this.advice = advice;
    this.prescriptionDate = prescriptionDate;
  }
}