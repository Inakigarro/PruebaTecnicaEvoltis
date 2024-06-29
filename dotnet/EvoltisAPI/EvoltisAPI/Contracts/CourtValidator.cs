using FluentValidation;

namespace EvoltisAPI.Contracts;

public class CourtValidator : AbstractValidator<CourtDto>
{
    public CourtValidator()
    {
        RuleFor(c => c.Id).NotNull().NotEmpty();
        RuleFor(c => c.Number).NotNull();
        RuleFor(c => c.Type).NotEmpty().MaximumLength(50);
    }
}
