// meal-booking.component.ts
import { Component } from '@angular/core';
import { MealService } from './meal.service';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-meal-booking',
  templateUrl: './meal-booking.component.html',
})
export class MealBookingComponent {
  isLoading = false;

  constructor(
    private mealService: MealService,
    private toastService: ToastService
  ) {}

  onBookMeal(mealId: number) {
    this.isLoading = true;
    this.mealService.bookMeal(mealId).subscribe({
      next: (res) => {
        this.toastService.showToast(`Booked ${res.mealName}! Order ID: ${res.orderId}`);
        this.isLoading = false;
      },
      error: (err) => {
        const errorMessage = err?.error?.error || 'Booking failed. Please try again later.';
        this.toastService.showToast(errorMessage);
        this.isLoading = false;
      }
    });
  }
}
