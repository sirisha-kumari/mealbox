using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Route("api/[controller]")]
[ApiController]
public class MealsController : ControllerBase
{
    private readonly AppDbContext _context;

    public MealsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Meal>>> GetMeals()
    {
        return await _context.Meals.ToListAsync();
    }

    [HttpPost("book")]
    public async Task<ActionResult<Order>> BookMeal([FromBody] MealBookingRequest request)
    {
        var meal = await _context.Meals.FindAsync(request.MealId);
        if (meal == null)
        {
            return NotFound();
        }

        var order = new Order
        {
            MealId = meal.Id,
            Status = "Pending",
            OrderDate = DateTime.UtcNow
        };

        _context.Orders.Add(order);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetOrder", new { id = order.Id }, order);
    }

    // Additional endpoints for order handling, etc.
}
