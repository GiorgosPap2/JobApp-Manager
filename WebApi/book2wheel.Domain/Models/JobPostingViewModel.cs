namespace book2wheel.Domain.Models;

public record JobPostingViewModel
{
    public Guid Id { get; set; }
    public string? JobTitle { get; set; }
    public string? Location { get; set; }
    public string? PostingContent { get; set; }
}