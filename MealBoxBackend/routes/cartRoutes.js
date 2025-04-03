router.post('/add-to-cart', async (req, res) => {
    const { userId, mealId, quantity } = req.body;
    try {
      const cartItem = await Cart.create({ userId, mealId, quantity });
      res.json(cartItem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  router.get('/cart/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
      const cartItems = await Cart.findAll({ where: { userId } });
      res.json(cartItems);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  