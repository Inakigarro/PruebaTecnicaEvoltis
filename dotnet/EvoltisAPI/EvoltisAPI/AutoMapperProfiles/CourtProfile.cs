using AutoMapper;
using EvoltisAPI.Contracts;
using EvoltisAPI.Domain;

namespace EvoltisAPI.AutoMapperProfiles;

public class CourtProfile : Profile
{
    public CourtProfile()
    {
        this.CreateMap<Court, CourtDto>()
            .ForMember(dto => dto.Id, opts => opts.MapFrom(entity => entity.Id))
            .ForMember(dto => dto.Number, opts => opts.MapFrom(entity => entity.Number))
            .ForMember(dto => dto.Type, opts => opts.MapFrom(entity => entity.Type));
    }
}
