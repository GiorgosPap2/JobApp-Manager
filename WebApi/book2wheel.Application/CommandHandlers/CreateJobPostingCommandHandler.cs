using book2wheel.Application.Commands;
using book2wheel.Domain;
using Ganss.Xss;
using MediatR;

namespace book2wheel.Application.CommandHandlers;

public class CreateJobPostingCommandHandler(IApplicationRepository repo): IRequestHandler<CreateJobPostingCommand, Guid>
{
    private readonly IApplicationRepository _repo = repo;

    public async Task<Guid> Handle(CreateJobPostingCommand request, CancellationToken cancellationToken)
    {
        var sanitizer = new HtmlSanitizer
        {
            AllowedAttributes = {"class"}
        };
        var expected = request.PostingContent;
        var sanitized = sanitizer.Sanitize(request.PostingContent).Replace("\"", "'");
        if (expected.Equals(sanitized))
        {
            var result = await _repo.CreateJobPosting(request);
            return result;
        }
        return Guid.Empty;
    }
}