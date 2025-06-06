using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers;

public class HomeController : Controller
{
    [HttpGet(template: nameof(Get))]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> GetResourceTimeAllocationForCalendarAsync([FromQuery] GetResourceTimeAllocationForCalendarQuery filter)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);

        var result = await Mediator!.Send(filter);

        if (result == null)
        {
            Response.StatusCode = StatusCodes.Status204NoContent;
        }

        return Ok(result);
    }
}