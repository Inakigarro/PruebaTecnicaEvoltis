using EvoltisAPI.Contracts;
using EvoltisAPI.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EvoltisAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CourtController : ControllerBase
{
    private readonly ICourtService _courtService;

    public CourtController(ICourtService courtService)
    {
        _courtService = courtService;
    }

    [HttpPost("CreateCourt")]
    public async Task<IActionResult> CreateCourtAsync(CreateCourtDto court)
    {
        try
        {
            var courtCreated = await _courtService.CreateCourtAsync(court);
            return StatusCode(StatusCodes.Status201Created, courtCreated);
        }
        catch (Exception ex)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        }
    }

    [HttpPut("UpdateCourt")]
    public async Task<IActionResult> UpdateCourtAsync(CourtDto court)
    {
        try
        {
            var courtUpdated = await _courtService.UpdateCourtAsync(court);
            return StatusCode(StatusCodes.Status200OK, courtUpdated);
        }
        catch (Exception ex)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        }
    }

    [HttpGet("GetCourtById/{id}")]
    public async Task<IActionResult> GetCourtByIdAsync([FromRoute] Guid id)
    {
        try
        {
            var court = await _courtService.GetCourtByIdAsync(id);
            return StatusCode(StatusCodes.Status200OK, court);
        }
        catch (Exception ex)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        }
    }

    [HttpGet("GetCourts")]
    public async Task<IActionResult> GetCourtsAsync()
    {
        try
        {
            var courts = await _courtService.GetCourtsAsync();
            return StatusCode(StatusCodes.Status200OK, courts);
        }
        catch (Exception ex)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        }
    }

    [HttpDelete("DeleteCourt")]
    public async Task<IActionResult> DeleteCourtAsync(Guid id)
    {
        try
        {
            await _courtService.DeleteCourtAsync(id);
            return StatusCode(StatusCodes.Status204NoContent);
        }
        catch (Exception ex)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        }
    }
}
