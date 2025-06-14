using book2wheel.Application.Models;
using book2wheel.Domain.Models;
using MediatR;

namespace book2wheel.Application.QuerieHandlers;

public class GetPostingByIdQueryHandler(IApplicationRepository repo): IRequestHandler<GetPostingByIdQuery, JobPostingViewModel>
{
    public async Task<JobPostingViewModel> Handle(GetPostingByIdQuery request, CancellationToken cancellationToken)
    {
        var result = await repo.GetJobPostingById(request);
        return result;
    }
}