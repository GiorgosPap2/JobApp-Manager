using book2wheel.Domain;
using Microsoft.EntityFrameworkCore;

namespace book2wheel.Infrastructure.Persistance;

public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : DbContext(options)
{
    internal DbSet<JobApplication> JobApplications { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
    }
}