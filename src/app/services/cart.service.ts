import { Injectable } from '@angular/core';
import {  Writer } from '../app.component';
import { Medicine } from '../models/medicine';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: any[] = [];

  constructor() { }

  getItems(): any {
    localStorage.setItem('cartItems', JSON.stringify(this.items));
    return this.items;
  }

  addToCart(medicine: Writer) {
    this.items.push({ ...medicine, quantity: 1 });
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }

  decrementQuantity(id: number) {
    let item = this.items.find((i) => i.id === id);
    if (item && item.quantity > 0) {
      item.quantity--;
      localStorage.setItem('cartItems', JSON.stringify(this.items));
    }
  }

  incrementQuantity(id: number) {
    let item = this.items.find((i) => i.id === id);
    if (item) {
      item.quantity++;
      localStorage.setItem('cartItems', JSON.stringify(this.items));
    }
  }

  deleteFromCart(item: any) {
    this.items = this.items.filter((i) => i.id !== item.id);
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }

  // getTotalPrice() {
  //   return this.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  // }



  //  course: Course[] = [];



  // ngOnInit(): void {

  //   let allCourse = JSON.parse(localStorage.getItem('courses') || '[]');
  //   this.course = allCourse;


  // }

  // constructor(private router: Router, private courseService: CourseService) {}

  // ngOnInit(): void {
  //   this.courseService.getCourses().subscribe((data) => {
  //     this.course = data;
  //   });
  // }

}
