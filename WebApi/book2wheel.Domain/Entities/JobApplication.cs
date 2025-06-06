using System.ComponentModel.DataAnnotations;

namespace book2wheel.Domain;

public class JobApplication
{
    [Key]
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string? Comments { get; set; }
}