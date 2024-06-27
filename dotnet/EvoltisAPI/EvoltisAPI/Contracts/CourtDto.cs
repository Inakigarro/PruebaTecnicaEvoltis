namespace EvoltisAPI.Contracts;

/// <summary>
/// Dto used to represent a court.
/// </summary>
public class CourtDto
{
    /// <summary>
    /// Gets or sets the Court's Id.
    /// </summary>
    public Guid Id { get; set; }

    /// <summary>
    /// Gets or sets the Court's Number.
    /// </summary>
    public int Number { get; set; }

    /// <summary>
    /// Gets or sets the Court's Type.
    /// </summary>
    public string Type { get; set; } = string.Empty;
}
