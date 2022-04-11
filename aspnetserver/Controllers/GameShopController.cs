
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace aspnetserver.Controllers
{
    [ApiController]
    [Route("[api]")]
    public class GameShopController : ControllerBase
    {
        private readonly ILogger<GameShopController> _logger;
        

        public GameShopController(ILogger<GameShopController> logger)
        {
            _logger = logger;

        }
    }
}
