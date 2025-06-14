using book2wheel.Application;
using book2wheel.Application.Commands;
using book2wheel.Application.Models;
using book2wheel.Domain;
using book2wheel.Domain.Models;
using book2wheel.Infrastructure.Persistance;

namespace book2wheel.Infrastructure.Implementations;    

public class ApplicationRepository(ApplicationDbContext dbContext): IApplicationRepository
{
    public async Task<JobApplicationViewModel> GetJobApplicationById(GetApplicationByIdQuery id)
    {
        var result = await dbContext.JobApplications.FindAsync(id);

        var model = new JobApplicationViewModel()
        {
            Name = result.Name,
            Surname = result.Surname,
            Email = result.Email,
            Comments = result.Comments,
        };

        return model;
    }

    public async Task<JobApplicationViewModel> GetJobApplicationById(Guid id)
    {
        var application = await dbContext.JobApplications.FindAsync(id);
        var model = new JobApplicationViewModel()
        {
            Name = application.Name,
            Surname = application.Surname,
            Email = application.Email,
            Comments = application.Comments,
        };
        return model;
    }

    public async Task<Guid> CreateJobApplication(CreateJobApplicationCommand request)
    {
        var entity = new JobApplication()
        {
            Id = Guid.NewGuid(),
            Name = request.Name,
            Surname = request.surname,
            Email = request.Email,
            Comments = request.Comments,
        };
        
        await dbContext.JobApplications.AddAsync(entity);
        await dbContext.SaveChangesAsync();
        return entity.Id;
    }

    public async Task<JobPostingViewModel> GetJobPostingById(GetPostingByIdQuery request)
    {
        var posting = await dbContext.JobPostings.FindAsync(request.Id);
        var model = new JobPostingViewModel()
        {
            Id = posting.Id,
            JobTitle = posting.JobTitle,
            Location = posting.Location,
            PostingContent = posting.PostingContent,
        };
        return model;
    }

    public async Task<Guid> CreateJobPosting(CreateJobPostingCommand request)
    {
        if (request != null)
        {
            var entity = new JobPosting()
            {
                Id = Guid.NewGuid(),
                JobTitle = request.JobTitle,
                Location = request.Location,
                PostingContent = request.PostingContent,
                CreatedDate = DateTime.Now,
                ModifiedDate = request.ModifiedDate,    
            };
            try
            {
                await dbContext.JobPostings.AddAsync(entity);
                await dbContext.SaveChangesAsync();
                return entity.Id;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
        return Guid.Empty;
    }
}