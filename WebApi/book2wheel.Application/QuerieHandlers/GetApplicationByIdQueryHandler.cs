using book2wheel.Application.Models;
using book2wheel.Domain.Models;
using MediatR;

namespace book2wheel.Application.QuerieHandlers;

public class GetApplicationByIdQueryHandler(IApplicationRepository repo): IRequestHandler<GetApplicationByIdQuery, JobApplicationViewModel>
{
    private readonly IApplicationRepository _repository = repo;
    public async Task<JobApplicationViewModel> Handle(GetApplicationByIdQuery request, CancellationToken cancellationToken)
    {
        var result = await _repository.GetJobApplicationById(request.Id);
        return result;
    }
}