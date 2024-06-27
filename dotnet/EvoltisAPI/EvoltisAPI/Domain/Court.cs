namespace EvoltisAPI.Domain;

public class Court
{
    /// <summary>
    /// Gets or sets the Court's Id.
    /// </summary>
    public Guid Id { get; set; }

    /// <summary>
    /// Gets or sets the Court's Number.
    /// </summary>
    public int Number { get; private set; }

    public string Type { get; private set; } = string.Empty;

    public Court()
    {
        Id = Guid.NewGuid();
    }

    public void SetNumber(int number)
    {
        if (number < 1)
        {
            throw new ArgumentException("Court number must be greater than 0.");
        }

        Number = number;
    }

    public void SetType(string type)
    {
        if (string.IsNullOrWhiteSpace(type))
        {
            throw new ArgumentException("Court type must not be empty.");
        }

        Type = type;
    }
}
