using book2wheel.Application.Commands;
using book2wheel.Application.Models;
using book2wheel.Domain.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers;

[Route("api/[controller]")]
[ApiController]

public class PostingController(IMediator mdtr) : ControllerBase
{
    private readonly IMediator _mediator = mdtr;
    
    [HttpGet(template: nameof(GetPostingById))]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> GetPostingById([FromQuery] GetPostingByIdQuery  filter)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);

        var result = await _mediator.Send(filter);

        if (result == null)
        {
            Response.StatusCode = StatusCodes.Status204NoContent;
        }

        return Ok(result);
    }
    
    [HttpPost(template: nameof(CreateJobPosting))]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status422UnprocessableEntity)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> CreateJobPosting([FromBody] JobPostingCreateModel  model)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);

        var filter = new CreateJobPostingCommand()
        {
            JobTitle = model.JobTitle,
            Location = model.Location,
            PostingContent = model.PostingContent,
        };

        var result = await _mediator.Send(filter);

        if (result == Guid.Empty)
        {
            Response.StatusCode =  StatusCodes.Status422UnprocessableEntity;
        }

        return Ok(result);
    }
}