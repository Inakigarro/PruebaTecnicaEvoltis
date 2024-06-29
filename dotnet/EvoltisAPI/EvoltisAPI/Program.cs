using EvoltisAPI.AutoMapperProfiles;
using EvoltisAPI.Contracts;
using EvoltisAPI.Persistence;
using EvoltisAPI.Repositories;
using EvoltisAPI.Services;
using FluentValidation;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Add Validators.
builder.Services.AddScoped<IValidator<CreateCourtDto>, CreateCourtValidator>();
builder.Services.AddScoped<IValidator<CourtDto>, CourtValidator>();
// Add AutoMapper.
builder.Services.AddAutoMapper(opts =>
{
    opts.AddProfile(new CourtProfile());
});

// Database configuration.
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
if (string.IsNullOrWhiteSpace(connectionString))
{
    throw new InvalidOperationException("Connection string is not set.");
}

builder.Services.AddDbContext<EvoltisDbContext>(opts =>
    opts.UseMySQL(connectionString, assembly => assembly.MigrationsAssembly(typeof(EvoltisDbContext).Assembly.FullName)));

// Register repositories.
builder.Services.AddScoped<ICourtRepository, CourtRepository>();

// Register services.
builder.Services.AddScoped<ICourtService, CourtService>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(builder =>
{
    builder.WithOrigins(
        "http://localhost:4200",
        "http://localhost:5018",
        "https://localhost:7151/")
        .AllowAnyHeader()
        .AllowAnyMethod();
});

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
