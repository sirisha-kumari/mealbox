
  document.addEventListener('DOMContentLoaded', function() {
    // Load user data
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      document.getElementById('username').textContent = currentUser.name;
    }
  
    // Food items data
    const foodItems = [
      {
        id: 1,
        name: "Veg Thali",
        category: "thali",
        price: 199,
        description: "Traditional thali with 3 curries, rice, chapati, salad and dessert",
        image: "assets/images/veg-thali.jpg"
      },
      // Add other items similarly
    ];
  
    // Render food items
    renderFoodItems(foodItems);
  
    // Filter functionality
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const category = this.dataset.category;
        const filtered = category === 'all' 
          ? foodItems 
          : foodItems.filter(item => item.category === category);
        
        renderFoodItems(filtered);
      });
    });
  });
  
  function renderFoodItems(items) {
    const container = document.getElementById('foodItems');
    container.innerHTML = items.map(item => `
      <div class="food-card" data-id="${item.id}" data-category="${item.category}">
        <img src="${item.image}" alt="${item.name}">
        <div class="food-details">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <div class="food-meta">
            <span class="price">₹${item.price}</span>
            <button class="btn-book">Book Now</button>
          </div>
        </div>
      </div>
    `).join('');
  }
  fetch('data/meals.json')
  .then(response => response.json())
  .then(data => {
    const meals = data.meals;
    const categories = data.categories;
    
    // Render meals
    renderMeals(meals);
    
    // Render category filters
    renderCategories(categories);
  });

function renderMeals(meals) {
  const container = document.querySelector('.food-items');
  container.innerHTML = meals.map(meal => `
    <div class="food-card" data-id="${meal.id}" data-category="${meal.category}">
      <img src="${meal.image}" alt="${meal.name}">
      <div class="food-details">
        <h3>${meal.name}</h3>
        <p>${meal.description}</p>
        <div class="food-meta">
          <span class="price">₹${meal.price}</span>
          <button class="btn-book">Book Now</button>
        </div>
      </div>
    </div>
  `).join('');
}
