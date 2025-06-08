using System.ComponentModel.DataAnnotations;

namespace book2wheel.Domain;

public class JobApplication
{
    [Key]
    public Guid Id { get; set; }
    public required string Name { get; set; }
    public required string Surname { get; set; }
    public required string Email { get; set; }
    public string? Comments { get; set; }
}