using book2wheel.Application.Commands;
using book2wheel.Domain.Models;
using MediatR;

namespace book2wheel.Application.CommandHandlers;

public class CreateJobApplicationCommandHandler(IApplicationRepository repo) : IRequestHandler<CreateJobApplicationCommand, Guid>
{
    private readonly IApplicationRepository _repo = repo;
    public async Task<Guid> Handle(CreateJobApplicationCommand request, CancellationToken cancellationToken)
    {
        var result = await _repo.CreateJobApplication(request);
        return result;
    }
}