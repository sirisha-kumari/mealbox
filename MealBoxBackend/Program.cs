using Microsoft.AspNetCore.Cors;

var builder = WebApplication.CreateBuilder(args);

// Add CORS services
builder.Services.AddCors(options => 
{
    options.AddPolicy("AllowAngular",
        policy => policy.WithOrigins("http://localhost:4200")
                        .AllowAnyMethod()
                        .AllowAnyHeader());
});

// Add other services
builder.Services.AddControllers();
// Add your DbContext and other dependencies here

var app = builder.Build();

// Configure middleware pipeline
app.UseCors("AllowAngular");  // Must come before UseRouting
app.UseRouting();
app.UseAuthorization();
app.MapControllers();

app.Run();