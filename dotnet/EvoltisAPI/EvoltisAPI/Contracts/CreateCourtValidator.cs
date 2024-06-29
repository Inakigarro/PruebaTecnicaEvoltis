using FluentValidation;

namespace EvoltisAPI.Contracts;

public class CreateCourtValidator : AbstractValidator<CreateCourtDto>
{
    public CreateCourtValidator()
    {
        RuleFor(c => c.Number).NotNull();
        RuleFor(c => c.Type).NotEmpty().MaximumLength(50);
    }
}
