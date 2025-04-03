using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Meal> Meals { get; set; }
    public DbSet<Order> Orders { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Optionally seed initial data
        modelBuilder.Entity<Meal>().HasData(
            new Meal { Id = 1, Name = "Meal Thali", Category = "Indian", Price = 9.99M, Description = "A complete meal", ImageUrl = "meal-thali.jpg", Calories = 500, IsVeg = true }
            // Add more meal data here
        );
    }
}
