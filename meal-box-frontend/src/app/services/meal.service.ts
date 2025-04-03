// meal.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  constructor(private http: HttpClient) {}

  bookMeal(mealId: number): Observable<any> {
    return this.http.post<any>(`/api/book-meal`, { mealId });
  }
}
