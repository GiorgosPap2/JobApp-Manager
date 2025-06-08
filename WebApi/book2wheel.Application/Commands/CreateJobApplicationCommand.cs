using MediatR;

namespace book2wheel.Application.Commands;

public record CreateJobApplicationCommand: IRequest<Guid>
{
    public string Name { get; set; }
    public string surname { get; set; }
    public string Email { get; set; }
    public string? Comments { get; set; }
}