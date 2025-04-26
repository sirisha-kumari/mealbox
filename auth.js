document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const loginCard = document.getElementById('loginCard');
    const signupCard = document.getElementById('signupCard');
    const showSignup = document.getElementById('showSignup');
    const showLogin = document.getElementById('showLogin');
  
    // Toggle between login/signup
    showSignup.addEventListener('click', function(e) {
      e.preventDefault();
      loginCard.classList.add('hidden');
      signupCard.classList.remove('hidden');
    });
  
    showLogin.addEventListener('click', function(e) {
      e.preventDefault();
      signupCard.classList.add('hidden');
      loginCard.classList.remove('hidden');
    });
  
    // Login Form Submission
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
  
      // Simple validation
      if (!email || !password) {
        showError('Please fill in all fields', loginForm);
        return;
      }
  
      // Mock authentication (replace with actual API call)
      authenticateUser(email, password)
        .then(user => {
          // Store user data (in real app, use JWT)
          localStorage.setItem('currentUser', JSON.stringify(user));
          window.location.href = 'index.html';
        })
        .catch(error => {
          showError(error.message, loginForm);
        });
    });
  
    // Signup Form Submission
    signupForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('signupName').value;
      const email = document.getElementById('signupEmail').value;
      const password = document.getElementById('signupPassword').value;
      const confirm = document.getElementById('signupConfirm').value;
  
      // Validation
      if (!name || !email || !password || !confirm) {
        showError('Please fill in all fields', signupForm);
        return;
      }
  
      if (password !== confirm) {
        showError('Passwords do not match', signupForm);
        return;
      }
  
      if (password.length < 6) {
        showError('Password must be at least 6 characters', signupForm);
        return;
      }
  
      // Mock registration (replace with API call)
      registerUser(name, email, password)
        .then(user => {
          showToast('Account created successfully! Please login');
          signupCard.classList.add('hidden');
          loginCard.classList.remove('hidden');
          signupForm.reset();
        })
        .catch(error => {
          showError(error.message, signupForm);
        });
    });
  
    // Mock Authentication Service
    function authenticateUser(email, password) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const users = JSON.parse(localStorage.getItem('users')) || [];
          const user = users.find(u => u.email === email && u.password === password);
          
          if (user) {
            resolve({ email: user.email, name: user.name });
          } else {
            reject(new Error('Invalid email or password'));
          }
        }, 800); // Simulate API delay
      });
    }
  
    function registerUser(name, email, password) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let users = JSON.parse(localStorage.getItem('users')) || [];
          
          if (users.some(u => u.email === email)) {
            reject(new Error('Email already exists'));
            return;
          }
  
          const newUser = { name, email, password };
          users.push(newUser);
          localStorage.setItem('users', JSON.stringify(users));
          resolve(newUser);
        }, 800);
      });
    }
  
    function showError(message, form) {
      // Remove existing errors
      const existingErrors = form.querySelectorAll('.error-message');
      existingErrors.forEach(el => el.remove());
  
      const errorEl = document.createElement('div');
      errorEl.className = 'error-message';
      errorEl.textContent = message;
      form.insertBefore(errorEl, form.lastElementChild);
      errorEl.style.display = 'block';
  
      setTimeout(() => {
        errorEl.style.opacity = '0';
        setTimeout(() => errorEl.remove(), 300);
      }, 3000);
    }
  
    function showToast(message) {
      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.textContent = message;
      document.body.appendChild(toast);
  
      setTimeout(() => {
        toast.classList.add('show');
      }, 10);
  
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => document.body.removeChild(toast), 300);
      }, 3000);
    }
  });