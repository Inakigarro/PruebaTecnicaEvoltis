using EvoltisAPI.Domain;
using EvoltisAPI.Persistence;
using Microsoft.EntityFrameworkCore;

namespace EvoltisAPI.Repositories;

public class CourtRepository : ICourtRepository
{
    private readonly EvoltisDbContext _context;

    public CourtRepository(EvoltisDbContext context)
    {
        _context = context;
    }

    /// <inheritdoc />
    public async Task<Court> AddCourtAsync(Court court)
    {
        await _context.Courts.AddAsync(court);
        await _context.SaveChangesAsync();

        return court;
    }

    /// <inheritdoc />
    public async Task<Court> UpdateCourtAsync(Court court)
    {
        _context.Update(court);
        await _context.SaveChangesAsync();
        return court;
    }

    /// <inheritdoc />
    public async Task<Court?> GetCourtByIdAsync(Guid id)
    {
        var court = await _context.Courts.FindAsync(id);
        return court;
    }

    /// <inheritdoc />
    public async Task<IEnumerable<Court>> GetCourtsAsync()
    {
        return await _context.Courts.ToListAsync();
    }

    /// <inheritdoc />
    public async Task DeleteCourtAsync(Court court)
    {
        _context.Courts.Remove(court);
        await _context.SaveChangesAsync();
    }
}
