namespace book2wheel.Domain.Models;

public class JobApplicationCreateModel
{
    public string Name { get; set; }
    public string Surname { get; set; }
    public string Email { get; set; }
    public string? Comments { get; set; }
}