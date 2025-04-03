addToCart(userId: number, mealId: number, quantity: number) {
    return this.http.post(`${this.apiUrl}/cart/add-to-cart`, { userId, mealId, quantity });
  }
  
  getCart(userId: number) {
    return this.http.get<any[]>(`${this.apiUrl}/cart/${userId}`);
  }
  