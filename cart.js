document.addEventListener('DOMContentLoaded', function() {
    let cart = JSON.parse(localStorage.getItem('mealBoxCart')) || [];
    
    // Update cart count
    updateCartCount();
    
    // Cart modal toggle
    document.getElementById('cartLink').addEventListener('click', function(e) {
      e.preventDefault();
      openCartModal();
    });
    
    // Close modal
    document.querySelector('.close').addEventListener('click', closeCartModal);
    
    // Add to cart
    document.addEventListener('click', function(e) {
      if (e.target.classList.contains('btn-book')) {
        const card = e.target.closest('.food-card');
        const itemId = parseInt(card.dataset.id);
        const item = getItemById(itemId);
        
        addToCart(item);
        showToast('${item.name} added to cart!');
      }
    });
    
    // Checkout
    document.getElementById('checkoutBtn').addEventListener('click', function() {
      alert('Checkout functionality will be implemented!');
    });
    
    function openCartModal() {
      document.getElementById('cartModal').style.display = 'block';
      renderCartItems();
    }
    
    function closeCartModal() {
      document.getElementById('cartModal').style.display = 'none';
    }
    
    function renderCartItems() {
      const container = document.getElementById('cartItems');
      const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      
      container.innerHTML = cart.length > 0 
        ? cart.map(item => `
            <div class="cart-item">
              <span>${item.name} (${item.quantity})</span>
              <span>₹${item.price * item.quantity}</span>
            </div>
          `).join('')
        : '<p>Your cart is empty</p>';
      
      document.getElementById('cartTotal').textContent = total;
    }
    
    function addToCart(item) {
      const existing = cart.find(i => i.id === item.id);
      if (existing) {
        existing.quantity++;
      } else {
        cart.push({...item, quantity: 1});
      }
      localStorage.setItem('mealBoxCart', JSON.stringify(cart));
      updateCartCount();
    }
    
    function updateCartCount() {
      const count = cart.reduce((total, item) => total + item.quantity, 0);
      document.getElementById('cartCount').textContent = count;
    }
  });
  
  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }