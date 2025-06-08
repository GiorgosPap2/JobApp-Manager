using book2wheel.Application;
using book2wheel.Application.Commands;
using book2wheel.Domain;
using book2wheel.Domain.Models;
using book2wheel.Infrastructure.Persistance;

namespace book2wheel.Infrastructure.Implementations;    

public class ApplicationRepository(ApplicationDbContext dbContext): IApplicationRepository
{
    private readonly ApplicationDbContext _dbContext = dbContext;
    public async Task<JobApplicationViewModel> GetJobApplicationById(Guid id)
    {
        var result = await _dbContext.JobApplications.FindAsync(id);

        var model = new JobApplicationViewModel()
        {
            Name = result.Name,
            Surname = result.Surname,
            Email = result.Email,
            Comments = result.Comments,
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
        
        await _dbContext.JobApplications.AddAsync(entity);
        await _dbContext.SaveChangesAsync();
        return entity.Id;
    }
}