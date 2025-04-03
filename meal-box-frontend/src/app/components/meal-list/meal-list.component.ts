import { Component, OnInit } from '@angular/core';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {
  meals: any[] = [];  // Array to hold meal data

  constructor(private mealService: MealService) {}

  ngOnInit() {
    this.loadMeals();
  }

  loadMeals() {
    this.mealService.getMeals().subscribe(
      (data) => this.meals = data,
      (error) => console.error('Error loading meals', error)
    );
  }

  onBookMeal(mealId: number) {
    this.mealService.bookMeal(mealId).subscribe(
      () => alert('Meal booked successfully!'),
      (error) => console.error('Booking failed', error)
    );
  }
}
