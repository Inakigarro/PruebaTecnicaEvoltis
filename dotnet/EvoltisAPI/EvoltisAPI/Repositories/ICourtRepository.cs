using EvoltisAPI.Domain;

namespace EvoltisAPI.Repositories;

public interface ICourtRepository
{
    /// <summary>
    /// Gets all <see cref="Court"/>s asynchronously.
    /// </summary>
    /// <returns>
    /// A task that represents the asynchronous operation.
    /// The task result contains the collection of all <see cref="Court"/>s.
    /// </returns>
    Task<IEnumerable<Court>> GetCourtsAsync();

    /// <summary>
    /// Gets a <see cref="Court"/> by its Id asynchronously.
    /// </summary>
    /// <param name="id">The <see cref="Court"/>'s id to retrieve.</param>
    /// <returns>
    /// A task that represents the asynchronous operation.
    /// The task result contains the corresponding <see cref="Court"/>.
    /// </returns>
    Task<Court?> GetCourtByIdAsync(Guid id);

    /// <summary>
    /// Adds a new <see cref="Court"/> asynchronously.
    /// </summary>
    /// <param name="court">The <see cref="Court"/> to add.</param>
    /// <returns>
    /// A task that represents the asynchronous operation.
    /// The task result contains the added <see cref="Court"/>.
    /// </returns>
    Task<Court> AddCourtAsync(Court court);

    /// <summary>
    /// Updates an existing <see cref="Court"/> asynchronously.
    /// </summary>
    /// <param name="court">The <see cref="Court"/> to update.</param>
    /// <returns>
    /// A task that represents the asynchronous operation.
    /// The task result contains the updated <see cref="Court"/>.
    /// </returns>
    Task<Court> UpdateCourtAsync(Court court);

    /// <summary>
    /// Deletes a <see cref="Court"/> asynchronously.
    /// </summary>
    /// <param name="court">The <see cref="Court"/> to delete.</param>
    Task DeleteCourtAsync(Court court);
}
