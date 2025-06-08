using book2wheel.Application.Commands;
using book2wheel.Application.Models;
using book2wheel.Domain.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers;

[Route("api/[controller]")]
[ApiController]

public class ApplicationController(IMediator mdtr) : ControllerBase
{
    private readonly IMediator _mediator = mdtr;
    
    [HttpGet(template: nameof(GetApplicationById))]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> GetApplicationById([FromQuery] GetApplicationByIdQuery  filter)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);

        var result = await _mediator.Send(filter);

        if (result == null)
        {
            Response.StatusCode = StatusCodes.Status204NoContent;
        }

        return Ok(result);
    }
    
    [HttpPost(template: nameof(CreateApplication))]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> CreateApplication([FromBody] JobApplicationCreateModel  model)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);

        var filter = new CreateJobApplicationCommand()
        {
            Name = model.Name,
            surname = model.Surname,
            Email = model.Email, 
            Comments = model.Comments,
        };

        var result = await _mediator.Send(filter);

        if (result == null)
        {
            Response.StatusCode = StatusCodes.Status204NoContent;
        }

        return Ok(result);
    }
}