const express = require('express');
const router = express.Router();
const db = require('../../MealBoxBackend/Models/db');
const Meal = require('../models/meal');

router.get('/meals', async (req, res) => {
  try {
    const meals = await Meal.findAll();
    res.json(meals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/book', async (req, res) => {
  try {
    // Implement your booking logic here
    res.json({ message: 'Booking successful!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
// server.js or routes.js
const express = require('express');
const app = express();
app.use(express.json()); // For parsing JSON bodies

app.post('/bookMeal', (req, res) => {
  const { mealId } = req.body;
  
  // Input validation
  if (!Number.isInteger(mealId) || mealId <= 0) {
    return res.status(400).json({ error: 'Invalid meal ID. It must be a positive integer.' });
  }

  // Proceed with booking logic here...
});
