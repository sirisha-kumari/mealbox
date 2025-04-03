public class Order
{
    public int Id { get; set; }
    public int MealId { get; set; }
    public string? Status { get; set; }
    public DateTime OrderDate { get; set; }
    public Meal? Meal { get; set; }
}
