using MediatR;

namespace book2wheel.Application.Commands;

public record CreateJobPostingCommand : IRequest<Guid>
{
    public string? JobTitle { get; set; }
    public string? Location { get; set; }
    public string? PostingContent { get; set; }
    public DateTime? CreatedDate { get; set; }
    public DateTime? ModifiedDate { get; set; }
}