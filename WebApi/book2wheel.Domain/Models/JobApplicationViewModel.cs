namespace book2wheel.Domain.Models;

public record JobApplicationViewModel
{
    public string Name { get; set; }
    public string surname { get; set; }
    public string Email { get; set; }
    public string? Comments { get; set; }
}