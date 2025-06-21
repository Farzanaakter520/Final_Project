export class Prescription {
  prescriptionId: number;
  doctorId: number;
  doctorName: string;
  patientId: number;
  patientName: string;
  medicines: string;
  tests: string;
  advice: string;
  prescriptionDate: string;
  
  constructor(
    prescriptionId = 0,
    doctorId = 0,
    doctorName = "",
    patientId = 0,
    patientName = "",
    medicines = "",
    tests = "",
    advice = "",
    prescriptionDate = ""
  ) {
    this.prescriptionId = prescriptionId;
    this.doctorId = doctorId;
    this.doctorName = doctorName;
    this.patientId = patientId;
    this.patientName = patientName;
    this.medicines = medicines;
    this.tests = tests;
    this.advice = advice;
    this.prescriptionDate = prescriptionDate;
  }
}