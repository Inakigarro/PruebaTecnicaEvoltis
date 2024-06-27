namespace EvoltisAPI.Contracts;

/// <summary>
/// Dtos used to create a court.
/// </summary>
public record CreateCourtDto
{
    /// <summary>
    /// Gets or sets the Court's Number.
    /// </summary>
    public int Number { get; init; }

    /// <summary>
    /// Gets or sets the Court's Type.
    /// </summary>
    public string Type { get; init; } = string.Empty;
}
