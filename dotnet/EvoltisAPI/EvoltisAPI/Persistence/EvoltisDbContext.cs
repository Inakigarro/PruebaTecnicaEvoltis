using EvoltisAPI.Domain;
using Microsoft.EntityFrameworkCore;

namespace EvoltisAPI.Persistence;

public class EvoltisDbContext : DbContext
{
    public DbSet<Court> Courts { get; set; }

    public EvoltisDbContext(DbContextOptions<EvoltisDbContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.HasDefaultSchema("evoltis");

        modelBuilder.ApplyConfiguration(new CourtEntityTypeConfiguration());
    }
}
