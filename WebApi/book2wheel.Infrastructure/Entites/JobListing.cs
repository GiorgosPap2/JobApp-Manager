using System.ComponentModel.DataAnnotations;

namespace book2wheel.Infrastructure.Entites;

public class JobListing
{
    [Key]
    public Guid JobListingId { get; set; }
    
}