using book2wheel.Application.Commands;
using book2wheel.Application.Models;
using book2wheel.Domain.Models;

namespace book2wheel.Application;

public interface IApplicationRepository
{ 
    Task<JobApplicationViewModel> GetJobApplicationById(Guid id);
    Task<Guid> CreateJobApplication(CreateJobApplicationCommand request);
    Task<JobPostingViewModel> GetJobPostingById(GetPostingByIdQuery request);
    Task<Guid> CreateJobPosting(CreateJobPostingCommand request);
}