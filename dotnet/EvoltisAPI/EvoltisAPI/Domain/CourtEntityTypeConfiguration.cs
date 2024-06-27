using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EvoltisAPI.Domain;

public class CourtEntityTypeConfiguration : IEntityTypeConfiguration<Court>
{
    public void Configure(EntityTypeBuilder<Court> builder)
    {
        builder.ToTable("Courts");
        builder.HasKey(entity => entity.Id);
        builder.Property(entity => entity.Number).HasColumnName("Number").IsRequired();
        builder.Property(entity => entity.Type).HasColumnName("Type").IsRequired();
    }
}
