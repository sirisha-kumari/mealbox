-- Create the MealBox Database
CREATE DATABASE mealBox;

-- Use the newly created database
USE mealBox;

-- Create a Meals Table
CREATE TABLE Meals (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Category VARCHAR(50),
    Price DECIMAL(10, 2),
    Description TEXT,
    ImageUrl VARCHAR(255),
    Calories INT,
    IsVeg BOOLEAN
);

-- Create an Orders Table
CREATE TABLE Orders (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    MealId INT,
    OrderedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (MealId) REFERENCES Meals(Id) ON DELETE CASCADE -- Added ON DELETE CASCADE for better integrity
);

-- Insert some initial data for Meals
INSERT INTO Meals (Name, Category, Price, Description, ImageUrl, Calories, IsVeg) VALUES
('Meal Thali', 'Thali', 199.00, 'Traditional Indian thali with rice, roti, dal, 2 veggies, curd, and dessert', 'Images/traditional-food.jpg', 650, true),
('Chicken Biryani', 'Biryani', 249.00, 'Hyderabadi-style dum biryani with raita and mirchi ka salan', 'Images/chiken briayani.jpg', 850, false),
('Paneer Biryani', 'Biryani', 229.00, 'Flavorful biryani with marinated paneer cubes and aromatic spices', 'Images/paneer briyani.jpg', 720, true),
('Sambar Rice', 'Rice', 149.00, 'South Indian comfort food with tangy sambar, rice, and papad', 'Images/sambar rice.jpeg', 580, true),
('Curd Rice', 'Rice', 129.00, 'Cooling curd rice with tempered mustard seeds and curry leaves', 'Images/curd rice.avif', 450, true),
('Veg Fried Rice', 'Rice', 179.00, 'Stir-fried rice with mixed vegetables and soy sauce', 'Images/veg fried rice.jpeg', 520, true);
