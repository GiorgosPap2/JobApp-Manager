using book2wheel.Domain;
using Microsoft.EntityFrameworkCore;

namespace book2wheel.Infrastructure.Persistance;

public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : DbContext(options)
{
    internal DbSet<JobApplication> JobApplications { get; set; }
    internal DbSet<JobPosting> JobPostings { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<JobApplication>()
            .HasMany(a => a.JobPostings)
            .WithMany(p => p.JobApplications);
    }
}