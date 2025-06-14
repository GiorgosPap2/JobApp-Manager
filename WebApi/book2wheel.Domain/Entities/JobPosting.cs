using System.ComponentModel.DataAnnotations;

namespace book2wheel.Domain;

public class JobPosting
{
    [Key]
    public Guid Id { get; set; }
    [Required]
    public string JobTitle { get; set; }
    [Required]
    public string Location { get; set; }
    [Required]
    public string PostingContent { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime? ModifiedDate { get; set; }
    public virtual List<JobApplication> JobApplications { get; set; }
}