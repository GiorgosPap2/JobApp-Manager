using MediatR;
using book2wheel.Domain.Models;

namespace book2wheel.Application.Models;

public record GetApplicationByIdQuery: IRequest<JobApplicationViewModel>
{
    public Guid Id { get; set; }
}