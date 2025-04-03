module.exports = (sequelize, DataTypes) => {
    const Meal = sequelize.define('Meal', {
      name: DataTypes.STRING,
      category: DataTypes.STRING,
      price: DataTypes.DECIMAL(10, 2),
      description: DataTypes.TEXT,
      imageUrl: DataTypes.STRING,
      calories: DataTypes.INTEGER,
      isVeg: DataTypes.BOOLEAN,
    }, { timestamps: false });
  
    return Meal;
  };
  