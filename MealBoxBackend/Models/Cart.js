module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define('Cart', {
      userId: DataTypes.INTEGER,
      mealId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER
    }, { timestamps: false });
  
    return Cart;
  };
  