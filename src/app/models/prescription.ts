// export class Prescription {
//   prescription_id: number;
//   patientId: number;
//   doctorId: number;
//   description: string;
//   dosage: string;
//   duration: string;
//   prescription_date: Date;

//   constructor() {
//     this.prescription_id = 0;
//     this.patientId = 0;
//     this.doctorId = 0;
//     this.description = "";
//     this.dosage = "";
//     this.duration = "";
//     this.prescription_date = new Date();
//   }
// }



export class Prescription {
  prescription_id: number;
  patientId: number;
  doctorId: number;
  description: string;
  dosage: string;
  duration: string;
  prescription_date: Date;

  constructor(
    prescription_id = 0,
    patientId = 0,
    doctorId = 0,
    description = "",
    dosage = "",
    duration = "",
    prescription_date = new Date()
  ) {
    this.prescription_id = prescription_id;
    this.patientId = patientId;
    this.doctorId = doctorId;
    this.description = description;
    this.dosage = dosage;
    this.duration = duration;
    this.prescription_date = prescription_date;
  }
}
