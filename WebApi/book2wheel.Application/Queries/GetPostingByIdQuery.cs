using book2wheel.Domain.Models;
using MediatR;

namespace book2wheel.Application.Models;

public record GetPostingByIdQuery: IRequest<JobPostingViewModel>
{
    public Guid Id { get; set; }
}