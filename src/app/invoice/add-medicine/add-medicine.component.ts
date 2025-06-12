import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-add-medicine',
  imports: [FormsModule],
  templateUrl: './add-medicine.component.html',
  styleUrl: './add-medicine.component.css'
})
export class AddMedicineComponent {
 medicine = {
    companyName: '',
    itemName: '',
    generic:'',
    category: '',
    quantity: 0,
    unitPrice: 0,
    purchaseDiscount: 0,
    netPurchasePrice: 0,
    sellPrice: 0
  };

  constructor(private inventoryService: InventoryService) {}

  onSubmit(form: NgForm) {
    this.medicine.netPurchasePrice = this.medicine.unitPrice - this.medicine.purchaseDiscount;    

    this.inventoryService.addMedicine(this.medicine).subscribe({
      next: (res) => {
        alert('Medicine added!');
        form.resetForm();
      },
      error: (err) => {
        alert('Error adding medicine');
        console.error(err);
      }
    });
  }
}