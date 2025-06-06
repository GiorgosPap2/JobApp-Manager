using MediatR;
using book2wheel.Domain.Models;

namespace book2wheel.Application.Models;

public record GetApplicationByIDQuery: IRequest<JobApplicationViewModel>
{
    public Guid Id { get; init; }
}