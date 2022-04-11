using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;


namespace aspnetserver.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GameShopController : ControllerBase
    {
        private readonly ILogger<GameShopController> _logger;

        public GameShopController(ILogger<GameShopController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok("My first game");
        }
    }
}
