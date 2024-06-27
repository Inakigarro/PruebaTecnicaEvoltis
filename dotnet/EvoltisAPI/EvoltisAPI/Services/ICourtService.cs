using EvoltisAPI.Contracts;

namespace EvoltisAPI.Services;

public interface ICourtService
{
    /// <summary>
    /// Gets all <see cref="CourtDto"/>s asynchronously.
    /// </summary>
    /// <returns>
    /// A task that represents the asynchronous operation.
    /// The task result contains the collection of all <see cref="CourtDto"/>s. 
    /// </returns>
    Task<IEnumerable<CourtDto>> GetCourtsAsync();

    /// <summary>
    /// Gets a <see cref="CourtDto"/> by its Id asynchronously.
    /// </summary>
    /// <param name="id">The <see cref="CourtDto"/>'s id to retrieve.</param>
    /// <returns>
    /// A task that represents the asynchronous operation.
    /// The task result contains the corresponding <see cref="CourtDto"/>.
    /// </returns>
    Task<CourtDto> GetCourtByIdAsync(Guid id);

    /// <summary>
    /// Creates a new <see cref="CourtDto"/> asynchronously.
    /// </summary>
    /// <param name="court">The <see cref="CourtDto"/> to create.</param>
    /// <returns>
    /// A task that represents the asynchronous operation.
    /// The task result contains the created <see cref="CourtDto"/>.
    /// </returns>
    Task<CourtDto> CreateCourtAsync(CreateCourtDto court);

    /// <summary>
    /// Updates an existing <see cref="CourtDto"/> asynchronously.
    /// </summary>
    /// <param name="court">The <see cref="CourtDto"/> to update.</param>
    /// <returns>
    /// A task that represents the asynchronous operation.
    /// The task result contains the updated <see cref="CourtDto"/>.
    /// </returns>
    Task<CourtDto> UpdateCourtAsync(CourtDto court);

    /// <summary>
    /// Deletes a <see cref="CourtDto"/> asynchronously.
    /// </summary>
    /// <param name="id">The <see cref="CourtDto"/>'s id to delete.</param>
    Task DeleteCourtAsync(Guid id);
}
