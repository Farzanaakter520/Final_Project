export class Medicine{
    medicine_id:number;
    name:string;
    price:number;
    manufacturer:string;
    category:string;
    expirationDate:Date;
    stock:number;
    image:string;

    constructor(){
        this.medicine_id=0;
        this.name="";
        this.price=0;
        this.manufacturer="";
        this.category="";
        this.expirationDate=new Date();
        this.stock=0;
        this.image="";
    }

}

export interface MedicinePrescription {
  name: string;
  dosage: string;
  duration: string;

}

export interface Prescription {
  doctorId: number;
  patientId: number;
  patientName: string;
  medicines: string;
  tests: string;
  advice: string;
  prescriptionDate: string;
}

