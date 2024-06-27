using AutoMapper;
using EvoltisAPI.Contracts;
using EvoltisAPI.Domain;
using EvoltisAPI.Repositories;

namespace EvoltisAPI.Services;

public class CourtService : ICourtService
{
    private readonly ICourtRepository _courtRepository;
    private readonly IMapper _mapper;
    public CourtService(
        ICourtRepository courtRepository,
        IMapper mapper)
    {
        _courtRepository = courtRepository;
        _mapper = mapper;
    }

    /// <inheritdoc />
    public async Task<CourtDto> CreateCourtAsync(CreateCourtDto court)
    {
        var courtEntity = new Court();
        courtEntity.SetNumber(court.Number);
        courtEntity.SetType(court.Type);

        var result = await _courtRepository.AddCourtAsync(courtEntity);
        return _mapper.Map<CourtDto>(result);
    }

    /// <inheritdoc />
    public async Task<CourtDto> UpdateCourtAsync(CourtDto court)
    {
        var courtToUpdate = await _courtRepository.GetCourtByIdAsync(court.Id);
        if (courtToUpdate == null)
        {
            throw new InvalidOperationException("Court not found.");
        }

        courtToUpdate.SetNumber(court.Number);
        courtToUpdate.SetType(court.Type);

        var result = await _courtRepository.UpdateCourtAsync(courtToUpdate);
        return _mapper.Map<CourtDto>(result);
    }

    /// <inheritdoc />
    public async Task<CourtDto> GetCourtByIdAsync(Guid id)
    {
        var court = await _courtRepository.GetCourtByIdAsync(id);
        if (court == null)
        {
            throw new InvalidOperationException("Court not found.");
        }

        return _mapper.Map<CourtDto>(court);
    }

    /// <inheritdoc />
    public async Task<IEnumerable<CourtDto>> GetCourtsAsync()
    { 
        var courts = await _courtRepository.GetCourtsAsync();
        return _mapper.Map<IEnumerable<CourtDto>>(courts);
    }

    /// <inheritdoc />
    public async Task DeleteCourtAsync(Guid id)
    {
        var court = await _courtRepository.GetCourtByIdAsync(id);
        if (court == null)
        {
            throw new InvalidOperationException("Court not found.");
        }

        await _courtRepository.DeleteCourtAsync(court);
    }
}
